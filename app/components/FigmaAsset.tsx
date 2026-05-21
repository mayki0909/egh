import Image from "next/image";
import { isSvgAsset } from "../lib/figma-assets";

type FigmaAssetProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

/** Renders SVGs via native img; raster images via next/image. */
export default function FigmaAsset({
  src,
  alt,
  className,
  width,
  height,
  fill,
  sizes,
  priority,
}: FigmaAssetProps) {
  if (isSvgAsset(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${className ?? ""}`}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      width={width ?? 100}
      height={height ?? 100}
    />
  );
}
