import {} from "next/font/google";
import "./globals.css";
import {
  Playlist_Script,
  Waterlily,
  Playlist_Caps,
  Space_Mono,
  Waterfall,
  Gwendolyn,
  Neonderthaw,
  Indie_Flower,
  MeaCulpa,
  Sour_Gummy,
  VT323,
} from "./fonts";
import Main from "@/components/Main";

export const metadata = {
  title: "Phus Portfolio",
  description: "Portfolio of Paul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Playlist_Script.variable} ${Playlist_Caps.variable} ${Waterfall.variable} ${Waterlily.variable} ${Space_Mono.variable} ${Gwendolyn.variable} ${Neonderthaw.variable} ${Indie_Flower.variable} ${MeaCulpa.variable} ${Sour_Gummy.variable} ${VT323.variable}`}
      >
        <Main>{children}</Main>
      </body>
    </html>
  );
}
