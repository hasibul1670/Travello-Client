import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#172568",
        secondaryColor: "var(--secondary-color)",
        successColor: "var(--success-color)",
        warningColor: "var(--warning-color)",
        lightColor: "var(--light-color)",
        infoColor: "var(--info-color)",
        errorColor: "var(--error-color)",
        darkColor: "var(--dark-color)",
      },

      fontSize: {
        title: "var(--title-font)",
        subtitle: "var(--subtitle-font)",
        body1: "var(--body1-font)",
        body2: "var(--body2-font)",
      },
      borderRadius: {
        radius1: "var(--border-radius)",
        radius2: "var(--component-radius)",
      },
    },
  },
  plugins: [],
};
export default config;
