module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
      body: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
      sans: ['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
    },
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        gray100: '#f6f5f0',
        gray400: '#333333',
        bgGray: '#F9F9F9',
        bgWhite: '#FCFCFC',
        lightBlue: '#308CE0',
        darkBlue: '#3452BC',
        
      },
      fontFamily: {
        primary: "'Open Sans', 'Segoe UI', Tahoma, sans-serif",
        secondary:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  plugins: [],
}