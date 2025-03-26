import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { CssVarsProvider } from '@mui/joy/styles';  // Importar CssVarsProvider

export default function ColorModeSelect(props) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <CssVarsProvider> {/* Aquí también se envuelve este componente */}
      <Select
        value={mode}
        onChange={(event) => setMode(event.target.value)}
        SelectDisplayProps={{
          'data-screenshot': 'toggle-mode',
        }}
        {...props}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </CssVarsProvider>
  );
}
