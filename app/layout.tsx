import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Little Story — 29.08.69",
  description: "เรื่องราวเล็ก ๆ ของเราสองคน",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="th"><body>{children}</body></html>;
}
