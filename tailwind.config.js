/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
          colors: {
        'roxo': '#6411D9',
        "roxoForte": "#331B8C", 
        'marinho': '#1A1246',
        'laranja': '#F27405',
        'preto': '#000000'
      },
      width: {
        '450': '450px',
        '80': '80px',
        '110': '25rem',
      },
      heigth: {
        '150': '37.5rem',
        '128': '32rem'
      },
      fontSize: {
        "sm": '0.8rem',
        "base": '1rem',
        "xl": '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '5xl': '3.052rem',
        '6xl': '3.125rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

