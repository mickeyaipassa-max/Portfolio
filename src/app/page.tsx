import { Navigation } from "@/components/Navigation/Navigation";

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
      <div
        className="grid-container"
        style={{ minHeight: "100vh", outline: "1px dashed rgba(0,0,0,0.3)" }}
      />
    </>
  );
}
