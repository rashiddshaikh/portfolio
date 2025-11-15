import { delay } from '../../../utils/utils';

export type SearchInFileOptions = {
  fileList: FileList;
  query: string;
  max: number;
};

export type SearchFileResult = {
  file: string;
  data: string[];
};

export type SearchResult = {
  total: number;
  results: SearchFileResult[];
};

self.onmessage = async function (event: MessageEvent<SearchInFileOptions>) {
  const data = await searchInFiles(event.data);
  postMessage(data);
};

const searchInFiles = async (
  options: SearchInFileOptions
): Promise<SearchResult> => {
  const allData: SearchResult = {
    total: 0,
    results: [],
  };

  for (let i = 0; i < options.fileList.length; i++) {
    const file = options.fileList.item(i);
    if (!file) break;

    const fileResult = await searchInFile(file, options.query, options.max);

    allData.results.push({
      file: file.name,
      data: fileResult,
    });

    allData.total += fileResult.length;
  }

  return allData;
};

const searchInFile = async (
  file: File,
  query: string,
  max: number
): Promise<string[]> => {
  await delay(500);

  const fileSize = file.size;
  const result: string[] = [];
  const CHUNK_SIZE = 1024 * 1024; // 1 MB
  const decoder = new TextDecoder('utf-8');

  let offset = 0;
  const lines: string[] = [];

  while (offset < fileSize) {
    const chunk = await readChunk(file, offset, CHUNK_SIZE);
    if (!chunk) return result;

    const decodedChunk = decoder.decode(chunk);
    const chunkLines = decodedChunk.split('\n');

    if (offset + CHUNK_SIZE >= fileSize) {
      chunkLines.pop(); // remove last empty line
    }

    lines.push(...chunkLines);

    // Process lines while the first is complete
    while (
      lines.length > 0 &&
      (lines[0].endsWith('\n') || lines[0].endsWith('\r'))
    ) {
      const line = lines.shift();
      if (line && line.includes(query)) {
        result.push(line);
      }
      if (result.length >= max) return result;
    }

    offset += CHUNK_SIZE;
  }

  // Remaining lines
  while (lines.length > 0) {
    const line = lines.shift();
    if (line && line.includes(query)) result.push(line);
    if (result.length >= max) break;
  }

  return result;
};

function readChunk(
  file: File,
  offset: number,
  length: number
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const buffer = event?.target?.result;
      if (buffer instanceof ArrayBuffer) {
        resolve(new Uint8Array(buffer));
      } else {
        resolve(new Uint8Array());
      }
    };

    reader.onerror = (error) => reject(error);

    const chunk = file.slice(offset, offset + length);
    reader.readAsArrayBuffer(chunk);
  });
}
