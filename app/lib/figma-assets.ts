export const figmaAssets = {
  heroImage: "/figma/hero-image.png",
  servicesImage: "/figma/services-image.jpg",
  mapImage: "/figma/map.png",
  logo: "/figma/logo.svg",
  iconSealCheck: "/figma/icon-seal-check.svg",
  iconShieldCheck: "/figma/icon-shield-check.svg",
  iconCertificate: "/figma/icon-certificate.svg",
  iconLightning: "/figma/icon-lightning.svg",
  iconCircuitry: "/figma/icon-circuitry.svg",
  iconHammer: "/figma/icon-hammer.svg",
  iconPlugCharging: "/figma/icon-plug-charging.svg",
  iconLightningStar: "/figma/icon-lightning-star.svg",
  carouselPrev: "/figma/carousel-prev.svg",
  carouselNext: "/figma/carousel-next.svg",
  ctaLightningGroup: "/figma/cta-lightning-group.svg",
  ctaLightningFrame: "/figma/cta-lightning-frame.svg",
  footerLightning: "/figma/footer-lightning.svg",
} as const;

export const containerClass =
  "max-w-[1376px] mx-auto px-4 md:px-8 xl:px-[112px]";

export function isSvgAsset(src: string) {
  return src.endsWith(".svg");
}
