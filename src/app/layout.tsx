import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controlzed Labs — Software for what's next",
  description: "We turn ambitious ideas into software people love to use. Product strategy, software development and cloud solutions from Controlzed Labs.",
  icons: { icon: "/controlzed-mark.svg", apple: "/controlzed-mark.svg" },
  openGraph: { title: "Controlzed Labs", description: "Undoing problems. Crafting what’s next.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
