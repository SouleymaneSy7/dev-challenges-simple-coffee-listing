/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "400px",
        md: "728px",
        lg: "960px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    extend: {
      colors: {
        mainBgClr: "var(--main-bg-clr)",
        priceBgClr: "var(--price-bg-clr)",
        btnBgClr: "var(--body-text-clr)",
        tagBgClr: "var(--tag-bg-clr)",
        headingTextClr: "var(--heading-text-clr)",
        bodyTextClr: "var(--body-text-clr)",
        soldOutTextClr: "var(--sold-out-text-clr)",
      },
      transitionProperty: {
        "background-clr": "background",
      },
    },
    fontSize: {
      title: [
        "2rem",
        {
          fontWeight: "700",
        },
      ],
      body: [
        "1rem",
        {
          fontWeight: "600",
        },
      ],
      label: [
        "0.875rem",
        {
          fontWeight: "600",
        },
      ],
      price: [
        "0.75rem",
        {
          fontWeight: "600",
        },
      ],
      small: [
        "0.625rem",
        {
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
