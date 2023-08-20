import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from '@mui/material';
import { useContext, useState, CSSProperties} from 'react';
import { useTranslate } from '@tolgee/react';
import { SiteContext } from '../context';
import { HomeCard, HomeCardProps, CookieConsent } from '../components';
import { HomeContent } from '../content';



export const Home = () => {
  const { t } = useTranslate();
  const siteContextInstace = useContext(SiteContext);
  const [clickCounter, setClickCounter] = useState(0);
  const [tooltipText, settooltipText] = useState<string| null>('🤔');

  const acceptCookie = () => {
    siteContextInstace.setCookieAccepted(true);
  };

  const closeRecursionDialog = () => {
    siteContextInstace.setRecursionOpened(false);
  };

  const increaseCounter = () => {
    if (siteContextInstace.isEasterEggEnabled){
      settooltipText(null);
      return;
    } 
    setClickCounter(clickCounter + 1);
    switch (clickCounter) {
      case 10:
        settooltipText(t('don\'t you have anything better to do?'));
        break;

      case 25:
        settooltipText(null);
        break;

      case 50:
        settooltipText(t('Please stop'));
        break;

      case 69:
        settooltipText(t('69 Nice!'));
        break;

      case 70:
        settooltipText(t('Come on! It is not funny anymore'));
        break;

      case 100:
        settooltipText(t('Ok I give up'));
        siteContextInstace.userDiscoveredEasterEgg();
    }
  };

  const sections: HomeCardProps[] = HomeContent();
  const divStyle: CSSProperties  = {};
  return (
    <>
      <Container maxWidth="md">
        {sections.map((section, index) => (
          section.title === t('home-page-blog-title') ?
          <Tooltip key={index} sx={{pointerEvents:'none'}} placement="top"  title={tooltipText}>
            <div style={divStyle} onClick={increaseCounter}>
              <HomeCard  {...section} />
            </div>
          </Tooltip>
          :
          <HomeCard key={index} {...section} />
        ))}
      </Container>

      {
          !siteContextInstace.isCookieAccepted
            ? <CookieConsent message={t('cookie-notice-text')} onAccept={acceptCookie} acceptButtonLabel={t('accept')} rejectButtonLabel={t('accept-but-in-red')} />
            : null
        }

      <Dialog
        open={siteContextInstace.isRecursionOpened}
        onClose={closeRecursionDialog}
        aria-labelledby="recursion-dialog-title"
        aria-describedby="recursion-dialog-description"
      >
        <DialogTitle id="recursion-dialog-title">
          {t('recursion-dialog-title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="recursion-dialog-description">
            {t('recursion-dialog-text')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeRecursionDialog} autoFocus>{t('ok-i-get-it')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
