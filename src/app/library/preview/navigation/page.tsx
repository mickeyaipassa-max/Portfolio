import { Navigation } from "@/components/Navigation/Navigation";

export default function NavigationPreview() {
  return (
    <Navigation
      hrefs={{
        "latest-work": "#latest-work",
        "about-me": "#about-me",
        expertises: "#expertises",
        contact: "#contact",
      }}
      activeItem="about-me"
    />
  );
}
