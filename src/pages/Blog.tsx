import {
  Container,
  Typography,
} from '@mui/material';
import { useTranslate } from '@tolgee/react';
import { PropsWithChildren, useContext } from 'react';
import { SiteContext } from '../context';


type BlogProps = {
  isEasterEggEnabled:boolean,
};

export const Blog = (props:PropsWithChildren<BlogProps>) => {
  const { t } = useTranslate();
  const { isEasterEggEnabled } = props;
  const siteContextInstace = useContext(SiteContext);
  if(!isEasterEggEnabled) siteContextInstace.alertIntrusion();



  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        {t('blog')}
      </Typography>
      <Typography variant="h4" component="h2" sx={{ marginTop: '2rem', fontWeight: 'bold' }}>
        You have found the {siteContextInstace.easterEggsFound}/2 Easter Eggs!
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '2rem' }}>
        WIP
      </Typography>
    </Container>
  );
};
