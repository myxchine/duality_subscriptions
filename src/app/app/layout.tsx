import type { Metadata } from "next";
import "@/styles/globals.css";
import { MusicProvider } from "./context";
import MediaPlayer from "@/components/app/mediaplayer";
import Footer from "@/components/app/FooterNav";
import { AuthProvider } from "@/app/context";

export const metadata: Metadata = {
  title: "Myxic music",
  description: "Generated by Michael Dos Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <MusicProvider>
        {children}
        <div className="fixed bottom-0 w-full">
          <MediaPlayer />
          <Footer />
        </div>
      </MusicProvider>
    </AuthProvider>
  );
}
