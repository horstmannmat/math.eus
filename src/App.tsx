import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery, CssBaseline } from '@mui/material';
import { TolgeeProvider } from '@tolgee/react';
import { NavigationMenu } from './components';
import {
  MyProjects, NotFoundPage, Home, Curriculum, Blog,
} from './pages';
import { ColorModeContext, SiteContext } from './context';
import TolgeeComponent from './components/TolgeeComponent';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const siteContextInstace = useContext(SiteContext);


  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TolgeeProvider tolgee={TolgeeComponent} options={{ useSuspense: false }}>
            <BrowserRouter>
              {!siteContextInstace.hasUserCheated && <NavigationMenu />}
              <Routes>
                {!siteContextInstace.hasUserCheated && <>
                  <Route path="/" element={<Home />} />
                  <Route path="/curriculum" element={<Curriculum />} />
                  <Route path="/myprojects" element={<MyProjects />} />
                  <Route path="/blog" element={<Blog isEasterEggEnabled={siteContextInstace.isEasterEggEnabled}/>} /> 
                </>}
                <Route path="*" element={<NotFoundPage isUserACheater={siteContextInstace.hasUserCheated} />} />
              </Routes>
            </BrowserRouter>
          </TolgeeProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
};
export default App;
