// export const Waterlily = require("./Waterlily Script.otf");
// export const Playlist_Script = require("./Playlist Script.otf");

import localFont from "next/font/local";

export const MeaCulpa = localFont({
  src: "./MeaCulpa-Regular.ttf",
  display: "swap",
  variable: "--font-mea-culpa",
});
export const Gwendolyn = localFont({
  src: [
    {
      path: "./Gwendolyn/Gwendolyn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gwendolyn/Gwendolyn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gwendolyn",
  display: "swap",
  subsets: ["latin"],
});
export const Neonderthaw = localFont({
  src: "./Neonderthaw-Regular.ttf",
  display: "swap",
  variable: "--font-neonderthaw",
});
export const Bodoni_Moda = localFont({
  src: [
    {
      path: "./Bodoni_Moda/BodoniModa-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "./Bodoni_Moda/BodoniModa-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-bodoni-moda",
  display: "swap",
  subsets: ["latin"],
});
export const Sour_Gummy = localFont({
  src: [
    {
      path: "./Sour_Gummy/SourGummy-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "./Sour_Gummy/SourGummy-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sour-gummy",
});
export const Indie_Flower = localFont({
  src: "./IndieFlower-Regular.ttf",
  display: "swap",
  variable: "--font-indie-flower",
});

export const Space_Mono = localFont({
  src: [
    {
      path: "./Space_Mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Space_Mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    { path: "./Space_Mono/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "./Space_Mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-space-mono",
  display: "swap",
  subsets: ["latin"],
});

export const VT323 = localFont({
  src: "./VT323-Regular.ttf",
  display: "swap",
  variable: "--font-vt323",
});

export const Waterfall = localFont({
  src: "./Waterfall-Regular.ttf",
  display: "swap",
  variable: "--font-waterfall",
});

export const Playlist_Script = localFont({
  src: "./Playlist Script.otf",
  display: "swap",
  variable: "--font-playlist-script",
});
export const Playlist_Caps = localFont({
  src: "./Playlist Caps.otf",
  display: "swap",
  variable: "--font-playlist-caps",
});

export const Waterlily = localFont({
  src: "./Waterlily Script.otf",
  variable: "--font-waterlily-script",
});
