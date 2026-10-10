import type { PhotoTextCardProps } from "./PhotoTextCard";

/** The "Beyond the pixels" content, as set in Figma (Foto and text card). */
export const BEYOND_THE_PIXELS: PhotoTextCardProps = {
  backPhoto: {
    src: "/photo-text-card/museum.webp",
    alt: "Mickey bij een muurschildering in een museum",
  },
  frontPhoto: {
    src: "/photo-text-card/motorcycle.webp",
    alt: "Mickey op een motorfiets op het circuit",
    crop: { width: "149.75%", height: "100%", left: "-18.13%", top: "0" },
  },
  heading: "Beyond the pixels",
  subheading: "When I’m not designing, I like to switch things up.",
  paragraphs: [
    "You’ll often find me wandering through a museum, painting, working out, camping somewhere away from the noise, or doing something with a little more speed riding my motorcycle or taking it to the track.",
    "I like the contrast: finding inspiration in art and culture, creating something with my hands, being outdoors, and occasionally chasing the perfect line through a corner.",
    "Different worlds, but they all give me new energy, inspiration and perspective to bring back into my work.",
  ],
};
