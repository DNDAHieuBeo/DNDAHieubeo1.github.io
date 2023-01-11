/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        'universe' : "url('https://wallpaperaccess.com/full/5065594.jpg')",
        
        'mountain':"url('https://i.pinimg.com/originals/e2/64/2d/e2642de55732db8c8628b3519a63cda0.png')",
      },
      dropShadow: {
        'custom': '0 1px 1px rgba(29, 29, 29, 0.5)',
      },
      colors: {
        'blur': 'rgba(255,255,255, 0.05)',
        'transparent': 'rgba(255,255,255, 0)',
      }
    },
  },
  plugins: [],
}