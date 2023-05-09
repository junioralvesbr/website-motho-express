export default tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#44413E',
        secondary: '#99948F',
        third: '#871159',
        white: '#fff',
        whiteAlfa: 'rgba(255,255,255,0.8)',
      },
      backgroundImage: {
        'services': 'url(./images/servicos.jpg)',
        'howTo': 'url(./images/entregas.jpg)'
      }
    }
  }
}