export type GalleryImage = {
  src: string;
  alt: string;
};

const VIDEO_EXTENSIONS = /\.(mov|mp4|webm|ogg)$/i;

export function isVideoAsset(src: string) {
  return VIDEO_EXTENSIONS.test(src);
}

export const galleryImages: GalleryImage[] = [
    {
      src: "/assets/projekti/projekti1.jpeg",
      alt: "Hišna elektroinštalacija - EGH",
    },
    {
      src: "/assets/projekti/projekti2.jpeg",
      alt: "Hišna elektroinštalacija - EGH",
    },
    {
      src: "/assets/projekti/projekti3.jpeg",
      alt: "Hišno talno gretje - EGH",
    },
    {
      src: "/assets/projekti/projekti4.jpeg",
      alt: "Zaključna fina monterska dela - EGH",
    },
    {
      src: "/assets/projekti/projekti5.jpeg",
      alt: "Industrijska elektroinštalacija - EGH",
    },
    {
      src: "/assets/projekti/projekti6.jpeg",
      alt: "Popravilo industrijskega stroja - EGH",
    },
    {
      src: "/assets/projekti/projekti7.jpeg",
      alt: "Popravilo industrijskega stroja - EGH",
    },
    {
      src: "/assets/projekti/projekti8.jpeg",
      alt: "Priprava industrijske hale za električno priključitev - EGH",
    },
    {
      src: "/assets/projekti/projekti9.jpeg",
      alt: "Vezava elektro omarice - EGH",
    },
    {
      src: "/assets/projekti/projekti10.mov",
      alt: "Industrijska elektroinštalacija - EGH",
    },

  
];
