/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimal palette — white, grey, black + green accent
        ink: {
          DEFAULT: '#000000',
          soft: '#1a1a1a',
          muted: '#555555',
          faint: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          grey: '#F5F5F5',
          greyDark: '#EAEAEA',
        },
        accent: {
          DEFAULT: '#83B14E',
          hover: '#6F9A3E',
          soft: '#EDF4E2',
        },
        rule: '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem, 5.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(1.875rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.125rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.125rem, 1.75vw, 1.375rem)', { lineHeight: '1.3' }],
        'lead': ['clamp(1.0625rem, 1.3vw, 1.25rem)', { lineHeight: '1.55' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.875rem', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      maxWidth: {
        'prose': '38rem',
        'content': '64rem',
        'wide': '76rem',
      },
      spacing: {
        'section': 'clamp(3.5rem, 7vw, 6rem)',
      },
    },
  },
  plugins: [],
}
