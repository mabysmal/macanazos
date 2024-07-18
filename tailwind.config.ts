import type { Config } from "tailwindcss";
import { Bebas_Neue } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#29499e',
      'light-blue': '#6a789e',
      'orange': '#f68920',
      'red': '#9a0000',
      'black': '#010101',
      'white': '#fffff7',
      'gray': '#C7C7C7',
      'dark-orange': '#d37316',
      'green' : '#25d366'

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {

        'font-bebas': ['Bebas Neue', 'sans-serif'],
        'font-montserrat': ['Montserrat', 'sans-serif'],

      }
    },
  },
  plugins: [],
};
export default config;
