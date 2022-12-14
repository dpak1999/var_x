import { createTheme } from "@material-ui/core/styles"

// colors
const green = "#99b898"
const darkGreen = "#708670"
const tan = "#fecea8"
const lightRed = "#ff847c"
const red = "#e84a5f"
const offBlack = "#2a363b"
const grey = "#747474"
const white = "#fff"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: green,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "3rem",
      fontWeight: 500,
      color: white,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 300,
      color: green,
    },
    h4: {
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "3rem",
      color: white,
    },
    h5: {
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "2rem",
      color: white,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: grey,
    },
  },
  overrides: {},
})

export default theme
