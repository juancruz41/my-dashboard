import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';
import green from '@mui/material/colors/green';
import pink from '@mui/material/colors/pink';

// Función para generar temas personalizados
const generateTheme = (primary, secondary) =>
  createTheme({
    palette: {
      primary: {
        main: primary[500],
      },
      secondary: {
        main: secondary[500],
      },
      error: {
        main: red[500],
      },
    },
  });

// Definición de temas personalizados
const themes = {
  default: createTheme(), // Tema por defecto de MUI
  red: generateTheme(red, pink),
  green: generateTheme(green, red),
};

export default themes;
