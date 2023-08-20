import { Container, Grid, Typography } from '@mui/material';
import { useTranslate } from '@tolgee/react';
import { useContext } from 'react';
import { MyProjectCard } from '../components';
import { SiteContext } from '../context';
import { MyProjectsContent } from '../content';

export const MyProjects = () => {
  const { t } = useTranslate();
  const siteContextInstace = useContext(SiteContext);

  const openRecursionSite = () => {
    siteContextInstace.setRecursionOpened(true);
  };
  const actions: (() => void | null)[] = [];
  actions.push(openRecursionSite);

  const myProjectsContent = MyProjectsContent(actions);

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        {t('myprojects')}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ marginBottom: '2rem' }}>
        {t('myprojects-heading-text')}
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={2}>
        {myProjectsContent.map((project, index) => (
          <MyProjectCard key={index} {...project} />
        ))}
      </Grid>
    </Container>
  );
};
