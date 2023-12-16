/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        inputText: "hsl(var(--input-text))",
        ring: "hsl(var(--ring))",
        icon: "hsl(var(--icon))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        pdf: "hsl(var(--pdf))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        clamp3Xl: "clamp(1rem, 4vw, 1.5rem)",
        clampXl: "clamp(1rem, 3vw, 1.25rem)",
        clampXs: "clamp(0.75rem, 2.5vw, 1.5rem)",
      },
      fontFamily: {
        main: ["var(--font-roboto)"],
        secondary: ["var(--font-lato)"],
      },
      boxShadow: {
        full: "0 1rem hsl(0, 57%, 40%)",
        table: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);",
      },
      width: {
        clampForm: "clamp(6.25rem, 90vw, 28rem)",
      },
      padding: {
        inputY: "clamp(1rem, 4vh, 1.75rem)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
