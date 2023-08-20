import { PropsWithChildren, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { useTranslate } from '@tolgee/react';

type NotFoundPageProps = {
  isUserACheater:boolean,
};
export const NotFoundPage = (props:PropsWithChildren<NotFoundPageProps>) => {
  const { isUserACheater } = props;

  const navigate = useNavigate();
  const { t } = useTranslate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000);
  }, [navigate]);
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        {isUserACheater ? 'Cheater!' : '404'}
      </Typography>
      <Typography variant="h4" component="h2" sx={{ marginTop: '2rem', fontWeight: 'bold' }}>
        {t('not-found-page-title')}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '2rem' }}>
        {t('not-found-page-content')}
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginTop: '2rem' }}>
        {t('go-back-home')}
      </Button>
    </Container>
  );
};
