import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./config/theme";  // Importa correctamente los temas definidos
import Dashboard from "./dashboard/theme/Dashboard"; // Asegúrate que este componente esté correctamente cargado

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Aquí todo estará bajo el mismo tema con modo claro */}
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
