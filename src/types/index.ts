import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    green1: Palette['primary'];
    green2: Palette['primary'];
    gray: Palette['primary'];
    brown: Palette['primary'];
    brown1: Palette['primary'];
    brown2: Palette['primary'];
    brown4: Palette['primary'];
    ivory: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    green1?: PaletteOptions['primary'];
    green2?: PaletteOptions['primary'];
    brown?: PaletteOptions['primary'];
    brown1?: PaletteOptions['primary'];
    brown2?: PaletteOptions['primary'];
    brown4?: PaletteOptions['primary'];
    ivory?: PaletteOptions['primary'];
  }
}