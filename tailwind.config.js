module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#000000",
          foreground: "#ffffff",
          light: "#333333",
          dark: "#000000",
        },
        secondary: {
          background: "#ffffff",
          foreground: "#000000",
          light: "#f7f7f7",
          dark: "#222222",
        },
        accent: {
          DEFAULT: "#f15858",
          foreground: "#ffffff",
          light: "#f48a8a",
          dark: "#d13030",
        },
        border: {
          primary: "#cccccc",
          secondary: "#999999",
          light: "#e0e0e0",
          dark: "#666666",
        },
      },
      fontFamily: {
        michelia: ["Michelia", "serif"],
        arsenal: ["Arsenal SC", "sans-serif"],
        reddit: ["Reddit Sans", "sans-serif"],
        redditCondensed: ["Reddit Sans Condensed", "sans-serif"],
      },
    },
  }
};