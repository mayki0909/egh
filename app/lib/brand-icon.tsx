import { readFile } from "node:fs/promises";
import { join } from "node:path";

type BrandIconProps = {
  size: number;
  logoSrc: string;
};

const FAVICON_BG = "#121214";

const LOGO_ASPECT = 478 / 248;

let logoDataUrl: string | null = null;

export async function getLogoDataUrl() {
  if (!logoDataUrl) {
    const buffer = await readFile(
      join(process.cwd(), "public/logo-white.png"),
    );
    logoDataUrl = `data:image/png;base64,${buffer.toString("base64")}`;
  }
  return logoDataUrl;
}

export function BrandIcon({ size, logoSrc }: BrandIconProps) {
  const padding = Math.round(size * 0.1);
  const maxW = size - padding * 2;
  const maxH = size - padding * 2;

  let logoW = maxW;
  let logoH = logoW / LOGO_ASPECT;
  if (logoH > maxH) {
    logoH = maxH;
    logoW = logoH * LOGO_ASPECT;
  }

  const radius = Math.round(size * 0.22);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: FAVICON_BG,
        borderRadius: radius,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt=""
        width={logoW}
        height={logoH}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
