import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { ExpertisesHero } from "@/components/ExpertisesHero/ExpertisesHero";

export const metadata: Metadata = {
  title: "Expertises — Mickey Aipassa",
  description: "Expertises of Mickey Aipassa",
};

export default function Expertises() {
  return (
    <>
      <Navigation
        hrefs={{
          "latest-work": "/#latest-work",
          "about-me": "/about",
          expertises: "/expertises",
          contact: "/#contact",
        }}
        activeItem="expertises"
      />
      <ExpertisesHero />
    </>
  );
}
