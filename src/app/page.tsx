import { Hero } from "@/components/home/Hero";
import { HomeIntro, HomeCTA, TeamSection } from "@/components/home/HomeSections";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <FeaturedProjects />
      <TeamSection />
      <HomeCTA />
    </>
  );
}
