/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#1e40af", // blue-800
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#f1f5f9", // slate-100
            foreground: "#1e293b", // slate-800
          },
          destructive: {
            DEFAULT: "#ef4444", // red-500
            foreground: "#ffffff",
          },
          muted: {
            DEFAULT: "#f1f5f9", // slate-100
            foreground: "#64748b", // slate-500
          },
          accent: {
            DEFAULT: "#dbeafe", // blue-100
            foreground: "#1e40af", // blue-800
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
  }
  