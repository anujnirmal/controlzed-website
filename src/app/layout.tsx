import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controlzed Labs — Program workflow software for nonprofits",
  description: "Founder-led software for US human-services nonprofits: beneficiary workflows, staff dashboards, program reporting, and practical integrations. Start with the tools you already use.",
  icons: { icon: "/controlzed-cz-logo.png", apple: "/controlzed-cz-logo.png" },
  openGraph: { title: "Controlzed Labs — Program workflow software for nonprofits", description: "Improve one funded program workflow at a time with beneficiary tools, staff dashboards, reporting, and system integrations.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
