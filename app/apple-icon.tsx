import { ImageResponse } from "next/og";
import { BrandIcon, getLogoDataUrl } from "./lib/brand-icon";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoSrc = await getLogoDataUrl();
  return new ImageResponse(<BrandIcon size={180} logoSrc={logoSrc} />, size);
}
