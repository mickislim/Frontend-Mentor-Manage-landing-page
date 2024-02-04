/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '375px',
        'lg':'1440px',

      },
      colors:{
        //primary
        'Primary-Bright-Red': "hsl(12, 88%, 59%)",
'Primary-Dark-Blue': 'hsl(228, 39%, 23%)',
     

// Neutral

'Neutral-Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
'Neutral-Very-Dark-Blue': 'hsl(233, 12%, 13%)',
'Neutral-Very-Pale-Red': 'hsl(13, 100%, 96%)',
'Neutral-Vary-Light-Gray': 'hsl(0, 0%, 98%)',


      },
      fontFamily:{
        'custom': ['"Be Vietnam Pro"', 'sans-serif'],
      },
      backgroundImage:{
        'lg-simplify-hero': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221439%22 height=%22360%22%3E%3Cg fill=%22%23FFF0EC%22 fill-rule=%22evenodd%22 opacity=%22.071%22 transform=%22translate(-171 -373)%22%3E%3Crect width=%22310.431%22 height=%22708%22 x=%22205%22 y=%22410%22 rx=%22155.215%22 transform=%22scale(1 -1) rotate(-45 -1484.244 0)%22/%3E%3Crect width=%22310.431%22 height=%22708%22 x=%221269%22 y=%227%22 rx=%22155.215%22 transform=%22scale(1 -1) rotate(-45 552.684 0)%22/%3E%3C/g%3E%3C/svg%3E')",
        'sm-simplify-hero': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2294%22 height=%22302%22%3E%3Crect width=%22310.431%22 height=%22708%22 x=%22-357%22 y=%22-17%22 fill=%22%23FFF0EC%22 fill-rule=%22evenodd%22 opacity=%22.071%22 rx=%22155.215%22 transform=%22scale(1 -1) rotate(-45 -951.398 26.5)%22/%3E%3C/svg%3E')",
        'tablet-pattern': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22814%22 height=%22814%22%3E%3Crect width=%22436%22 height=%22970%22 x=%22774%22 y=%22-62%22 fill=%22%23FFF0EC%22 fill-rule=%22evenodd%22 rx=%22218%22 transform=%22rotate(45 718.814 -291.157)%22/%3E%3C/svg%3E')",



      }

    },
  },
  plugins: [],
}
