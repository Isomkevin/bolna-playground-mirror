
/**
 * AfriCopilot AI Theme Configuration
 * 
 * This file contains theme constants and utilities for maintaining
 * consistent styling across the application.
 */

// Color palette with semantic naming
export const colors = {
  // Primary brand colors
  primary: {
    blue: "#1E55F7",       // Main brand color
    darkBlue: "#0F3AD2",   // Darker variant for hover states
    lightBlue: "#EBF0FF",  // Light background variant
    teal: "#0FC8D2",       // Accent color for gradients/highlights
    purple: "#6E59A5",     // Secondary accent color
  },
  
  // Functional colors
  functional: {
    success: "#34D399",    // Green for success states
    warning: "#FBBF24",    // Yellow/amber for warnings
    error: "#EF4444",      // Red for errors
    info: "#1E55F7",       // Blue for information (same as primary)
  },
  
  // Neutral colors for UI elements
  neutral: {
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
};

// Shadow definitions
export const shadows = {
  sm: "0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
  md: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.08)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.03), 0 8px 10px rgba(0, 0, 0, 0.06)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.12)",
};

// Typography scale
export const typography = {
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  fontSize: {
    display1: ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    display2: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    h2: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    h3: ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
    h4: ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
    titleLg: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }],
    titleMd: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],
    titleSm: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
    bodyLg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
    bodyMd: ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
    bodySm: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
    captionMd: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
    captionSm: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// Spacing scale
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  4.5: '1.125rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Border radius values
export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Animation timing
export const animations = {
  durations: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    very_slow: '500ms',
  },
  easings: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
};

// Gradients
export const gradients = {
  blue: 'linear-gradient(90deg, #1E55F7, #0FC8D2)',
  purple: 'linear-gradient(90deg, #6E59A5, #1E55F7)',
  success: 'linear-gradient(90deg, #34D399, #10B981)',
  warning: 'linear-gradient(90deg, #FBBF24, #F59E0B)',
  error: 'linear-gradient(90deg, #EF4444, #B91C1C)',
  subtle: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(249,250,251,1) 100%)',
};

// Z-index scale
export const zIndex = {
  negative: -1,
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  auto: 'auto',
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
};

// Theme utilities
// Helper to generate CSS variables from a color object
export const generateColorVariables = (colorObj: Record<string, string>, prefix = '') => {
  return Object.entries(colorObj).reduce((acc, [key, value]) => {
    acc[`--${prefix}${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
};

// Export the theme object
export const theme = {
  colors,
  shadows,
  typography,
  spacing,
  borderRadius,
  animations,
  gradients,
  zIndex,
};

export default theme;
