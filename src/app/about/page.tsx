import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the composers and producers behind Aurora Sound Studio. Cinematic composition meets contemporary production.",
};

export default function About() {
  return <AboutPage />;
}
