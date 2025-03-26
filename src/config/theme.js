import { createTheme } from '@mui/material/styles';
import { green, blue, red } from '@mui/material/colors';

// Crear un tema fijo con modo claro
const theme = createTheme({
  palette: {
    mode: 'light',  // Definir explícitamente que el tema es "light"
    primary: {
      main: green[500], // Usar color principal verde
    },
    secondary: {
      main: blue[500],  // Usar color secundario azul
    },
    error: {
      main: red[500],  // Usar color de error rojo
    },
    // Puedes agregar más configuraciones personalizadas
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
  },
  shape: {
    borderRadius: 8, // Esquinas redondeadas
  },
  components: {
    // Agregar personalización de componentes si es necesario
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 16px',
        },
      },
    },
  },
});

export default theme;
