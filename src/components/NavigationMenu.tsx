import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Container,
  Typography,
  Button,
  useTheme,
  Menu,
  InputLabel,
  FormControl,
  NativeSelect,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness7 as Brightness7Icon,
  Brightness4 as Brightness4Icon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslate, useTolgee } from '@tolgee/react';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext, SiteContext } from '../context';
import { LANGUAGES, PAGES } from '../constants';

export const NavigationMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { t } = useTranslate();
  const tolgee = useTolgee(['language']);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const siteContextInstace = useContext(SiteContext);


  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    tolgee.changeLanguage(langCode);
  };

  /**
   * This useless piece of code is needed cause the incorehence between chrome and firefox in linux and
   * microshit OS, it seems that good OS uses the OS native option for it.
   * the evil OS makes chrome and firefox behavior differently.
   *
   * Although is not the ideal, and still look bad on windows ( with a "Border"), at least now is visible
   * */
  const [bgColour, setBgColour] = useState(theme.palette.mode === 'dark' ? 'white' : 'black');
  useEffect(() => {
    setBgColour(theme.palette.mode === 'dark' ? 'white' : 'black');
  }, [theme]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = ():void => {
    setAnchorElNav(null);
  };
  const handleCheater = ():void => {
    setAnchorElNav(null);
    siteContextInstace.alertIntrusion();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem 
                  component={Link}
                  to={page.path}
                  key={page.title}
                  sx={ (page.title === 'blog' && !siteContextInstace.isEasterEggEnabled) ? {display:'none'}: {}}
                  onClick={(page.title === 'blog' && !siteContextInstace.isEasterEggEnabled) ? handleCheater: handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{t(page.title)}</Typography>
                    {/* {page.title === 'blog' && !siteContextInstace.isEasterEggEnabled && 
                      <HTMLComment comment="You found a easterEgg, go ahead try to enable it"/>
                    } */}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES.map((page) => (
              <Button
                component={Link}
                to={page.path}
                key={page.title}
                onClick={(page.title === 'blog' && !siteContextInstace.isEasterEggEnabled) ? handleCheater: handleCloseNavMenu}
                sx={ (page.title === 'blog' && !siteContextInstace.isEasterEggEnabled) ? { my: 2, color: 'white', display:'none'}: { my: 2, color: 'white', display: 'block' }}
              >
                {t(page.title)}
                {/* {page.title === 'blog' && !siteContextInstace.isEasterEggEnabled && 
                  <HTMLComment comment="You found a easterEgg, go ahead try to enable it"/>
                } */}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'contents' }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" aria-label={`Change to ${theme.palette.mode} mode`}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <FormControl sx={{ m: 1, width: 110, color: 'inherit' }} size="small">
              <InputLabel variant="standard" sx={{ color: 'inherit', '&.Mui-focused': { color: 'inherit' } }} htmlFor="language-select-label">
                {t('language')}
              </InputLabel>
              <NativeSelect
                defaultValue={tolgee.getLanguage()}
                onChange={onChangeLang}
                sx={{ color: 'inherit', '.MuiSvgIcon-root ': { fill: 'white !important' } }}
                inputProps={{
                  name: 'language',
                  id: 'language-select-label',
                }}
              >
                {LANGUAGES.map(({ code, label }) => (
                  // <option key={code} value={code}>{t(label)}  </option>
                  <option key={code} value={code} style={{ color: bgColour }}>
                    {t(label)}
                    {' '}
                  </option>
                ))}

              </NativeSelect>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
