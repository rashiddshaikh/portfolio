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

// Worker listener
self.onmessage = async (event: MessageEvent<SearchInFileOptions>) => {
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
    if (!file) continue;

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
  const CHUNK_SIZE = 1024 * 1024; // 1MB
  const decoder = new TextDecoder('utf-8');

  let offset = 0;
  const lines: string[] = [];

  while (offset < fileSize) {
    const chunk = await readChunk(file, offset, CHUNK_SIZE);
    if (!chunk) return result;

    const decodedChunk = decoder.decode(chunk);
    const chunkLines = decodedChunk.split('\n');

    // Remove trailing empty line for last chunk
    if (offset + CHUNK_SIZE >= fileSize) {
      chunkLines.pop();
    }

    lines.push(...chunkLines);

    // Process complete lines
    while (lines.length > 0 && isCompleteLine(lines[0])) {
      const line = lines.shift();
      if (line && line.includes(query)) {
        result.push(line);
      }
      if (result.length >= max) return result;
    }

    offset += CHUNK_SIZE;
  }

  // Process remaining buffer
  while (lines.length > 0) {
    const line = lines.shift();
    if (line && line.includes(query)) result.push(line);
    if (result.length >= max) break;
  }

  return result;
};

function isCompleteLine(line: string): boolean {
  return line.endsWith('\n') || line.endsWith('\r');
}

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

    reader.onerror = reject;

    const chunk = file.slice(offset, offset + length);
    reader.readAsArrayBuffer(chunk);
  });
}
