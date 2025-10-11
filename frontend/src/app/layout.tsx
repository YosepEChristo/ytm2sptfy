import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YTM2SPTFY",
  description: "Convert YouTube Music playlists to Spotify playlists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
