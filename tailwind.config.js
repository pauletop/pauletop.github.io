module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screen: {
      // Add custom screen size here
    },
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1120px",
      },
      colors: {
        prim: "#1C1C22",
        second: { DEFAULT: "#f2ead6", outline: "#79715d" },
        accent: {
          DEFAULT: "#00ff99",
          outline: "#00b900",
          hover: "#00e187",
          foreground: "#77d6a4",
        },
        red: {
          DEFAULT: "#EA5455",
          light: "#FEB692",
          dark: "#A12D2E",
        },
        blue: {
          DEFAULT: "#0396FF",
          light: "#ABDCFF",
          dark: "#004B87",
        },
        yellow: {
          DEFAULT: "#F9C74F",
          light: "#FCE68D",
          dark: "#B68D00",
        },
        peach: {
          DEFAULT: "#FF9B85",
          light: "#FFB7A5",
          dark: "#A12D2E",
        },
        green: {
          DEFAULT: "#4CAF50",
          light: "#A5D6A7",
          dark: "#2E7D32",
        },
        leaves: {
          DEFAULT: "#3A5A40",
          light: "#6A8E6A",
          dark: "#2C4231",
        },
      },
      fontFamily: {
        title: "var(--font-waterlily-script)",
        script: "var(--font-playlist-script)",
        caps: "var(--font-playlist-caps)",
        fancy: "var(--font-mea-culpa)",
        valentine: "var(--font-gwendolyn)",
        inovation: "var(--font-neonderthaw)",
        // sincere: "var(--font-bodoni-moda)",
        childlike: "var(--font-indie-flower)",
        gummy: "var(--font-sour-gummy)",
        pixel: "var(--font-vt323)",
        // Add custom font families here
        mono: "var(--font-space-mono)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        // Add custom spacing here
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here, e.g., require('@tailwindcss/forms')
  ],
};
