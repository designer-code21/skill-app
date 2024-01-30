module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dm:['"DM Serif Display"', 'serif'],
        roboto:['Roboto', 'sans-serif']
      },
      fontSize:{
        'xl1': '20px',
        '40px':'40px',
      },
      colors:{
        'nightBlue':'#435059',
        'seaGreen': '#6faf9f',
        'white':'#fff',
        'tangy': '#f77d5c',
        'tangyDark': '#e78b72',
        'tangyLight': '#f5ab87',
        'lime': '#d6eed7',
        'limeDark': '#b6d8c0',
        'limeLight': '#ecf6f3',
        'pista': '#DEF1DF',
        'saffron': '#fcd7a2',
        'saffronDark': '#f5ab87'
      },
      fontWeight:{
        xlight:300,
        xregular:400,
      },
      boxShadow:{
        'solidTangy': '10px 10px 0px 0px #e78b72',
        'solidLime': '10px 10px 0px 0px #b6d8c0',
        'solidSaffron': '10px 10px 0 0 #f5ab87',
        'btnShadow': '5px 5px 0 0 #e78b72',
        'btnShadowGreen': '5px 5px 0 0 #6faf9f'
      },
      padding:{
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '60p': '60%',
        '40p': '40%',
        '30p': '30%',
        '20p': '20%',
        '50p': '50%',
        '25p': '25%',
        '75p': '75%',
        '100p': '100%',
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens:{
        sm: '1200px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
