
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        // AfriCopilot brand colors
        africopilot: {
          blue: "#1E55F7",
          lightBlue: "#EBF0FF",
          darkBlue: "#0F3AD2",
          teal: "#0FC8D2",
          purple: "#6E59A5",
          green: "#34D399",
          yellow: "#FBBF24",
          orange: "#F97316",
          red: "#EF4444",
          border: "#E5E7EB",
          // Neutral shades
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      fontSize: {
        "display-1": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-2": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-2": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-3": ["1.75rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "heading-4": ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "title-lg": ["1.25rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "title-md": ["1.125rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "title-sm": ["1rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-md": ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "caption-md": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "caption-sm": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      boxShadow: {
        'soft-sm': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'soft-md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 20px 25px rgba(0, 0, 0, 0.03), 0 8px 10px rgba(0, 0, 0, 0.06)',
        'soft-2xl': '0 25px 50px rgba(0, 0, 0, 0.12)',
        'inner-highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '50': '12.5rem',
        '66': '16.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(4px)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scale-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.97)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
      },
      transitionProperty: {
        'height': 'height, max-height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'smooth-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0.8, 0, 0.6, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;

export default config;
