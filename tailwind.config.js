export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": 'var(--primary)',
        "secondary": 'var(--secondary)',
        "teriatory": 'var(--teriatory)',
        "hover-primary": 'var(--hover-primary)',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          // 'sm': '640px',
          // 'md': '768px',
          // 'lg': '1024px',
          // 'xl': '1280px',
          '2xl': '1536px',
        },
      },
      screens: {
        'custom': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1152px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
    },
  },
  plugins: []
}