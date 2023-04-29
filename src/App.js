import './App.css';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import { Button, CssBaseline, Paper, createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from './store/Slice';
import { useState, useMemo } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#fffbeb",
          },
          divider: "#fde68a",
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          text: {
            primary: "#000",
            secondary: "#27272a",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#dbf4ff",
          },
          divider: "#004282",
          background: {
            default: "#0B0952",
            paper: "#0B0952",
          },
          text: {
            primary: "#fff",
            secondary: "#71717a",
          },
        }),
  },
});


function App() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state)=> state.theme.darkMode)
  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <div >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst >
          <BrowserRouter>
 
      <Paper>
        <CssBaseline /> 
      <Header /> 
      <Body /> 
     
      </Paper>
  
          </BrowserRouter>
        </StyledEngineProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
