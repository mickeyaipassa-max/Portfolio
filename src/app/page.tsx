import { Navigation } from "@/components/Navigation/Navigation";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      {/* Temporary test hrefs for visual validation only — Figma defines no
          link destinations, so these are not part of the component's design. */}
      <Navigation
        hrefs={{
          "latest-work": "#latest-work",
          "about-me": "#about-me",
          expertises: "#expertises",
          contact: "#contact",
        }}
        activeItem="about-me"
      />
      <Hero />
    </>
  );
}
