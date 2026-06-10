import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aurora Sound Studio for your next film, animation, game, or music project.",
};

export default function Contact() {
  return <ContactPageContent />;
}
