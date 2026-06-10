import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Film scoring, orchestration, game music, musical theatre, song arrangement, and vocal production services.",
};

export default function Services() {
  return <ServicesPage />;
}
