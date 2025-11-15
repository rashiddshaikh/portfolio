'use client';

import { useEffect, useState } from 'react';

import PageWrapper from '@/containers/PageWrapper';
import Section from '@/containers/Section';

// Three Huawei detection methods
const methods: Array<() => boolean> = [
  // Method 1 — check "Huawei" in UA
  () => /Huawei/i.test(navigator.userAgent),

  // Method 2 — check list of Huawei device prefixes
  () => {
    const huaweiDevicesRegex =
      /ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|JAD-MLD-|RTE-|NAM-|NEN-|BAL-|JLN-|YAL|MGA-|FGD-|XYAO-|BON-|ALN-|ALT-|BRA-|DBY2-|STG-|MAO-|LEM-|GOA-|FOA-|MNA-|LNA-/i;

    return huaweiDevicesRegex.test(navigator.userAgent);
  },

  // Method 3 — check Huawei-specific global variables
  () => {
    const globalWindow = window as {
      huawei?: unknown;
      device?: { manufacturer?: string };
      hw?: unknown;
      Hw?: unknown;
      HMJS?: unknown;
    };

    if (globalWindow.huawei !== undefined) return true;
    if (
      globalWindow.device?.manufacturer?.toLowerCase() === 'huawei'
    )
      return true;
    if (globalWindow.hw !== undefined) return true;
    if (globalWindow.Hw !== undefined) return true;
    if (globalWindow.HMJS !== undefined) return true;

    return false;
  },
];

export default function HuaweiCheckPage() {
  const [render, setRender] = useState(false);

  // Prevent infinite re-renders
  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <PageWrapper>
      {render && (
        <Section
          elevated
          title="Detect Huawei device using User Agent"
          className="pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8"
        >
          <p>
            User Agent: <strong>{navigator.userAgent}</strong>
          </p>
          <br />

          <div className="max-w-full">
            {methods.map((func, i) => (
              <div key={`method_${i}`}>
                <h6>Method {i + 1}</h6>

                <pre className="whitespace-pre-wrap rounded-md bg-green-900/25 p-4">
                  {func.toString()}
                </pre>

                <h6>Result: {func() ? 'true' : 'false'}</h6>

                <hr className="my-4" />
              </div>
            ))}
          </div>
        </Section>
      )}
    </PageWrapper>
  );
}
