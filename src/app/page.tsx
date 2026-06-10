import { Hero } from "@/components/home/Hero";
import { HomeIntro, HomeCTA } from "@/components/home/HomeSections";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { DemoReel } from "@/components/home/DemoReel";
import { TeamPreview } from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <FeaturedProjects />
      <DemoReel />
      <TeamPreview />
      <HomeCTA />
    </>
  );
}
