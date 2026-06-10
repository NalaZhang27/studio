import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of film scores, animation music, game soundtracks, theatre compositions, and pop productions.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
