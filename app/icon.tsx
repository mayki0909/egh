import { ImageResponse } from "next/og";
import { BrandIcon, getLogoDataUrl } from "./lib/brand-icon";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoSrc = await getLogoDataUrl();
  return new ImageResponse(<BrandIcon size={32} logoSrc={logoSrc} />, size);
}
