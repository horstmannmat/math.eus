import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

export type HomeCardProps = {
  content:string | ReactNode,
  title:string,
  imgPath?: string,
  imgAltText?: string,
  imgExplanation?: string,
};

export const HomeCard = (props:PropsWithChildren<HomeCardProps>) => {
  const {
    content, imgPath, imgAltText, imgExplanation, title,
  } = props;

  return (
    <Card key={title} variant="outlined" sx={{ maxWidth: 600, margin: '20px auto', border: 'none' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={imgPath ? 6 : 12}>
                <Typography component="div" variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </Grid>
              {imgPath && (
                <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: 360, sm: 280, md: 268 }, height: { xs: 270, sm: 210, md: 201 }, objectFit: 'cover' }}
                    image={imgPath}
                    alt={imgAltText}
                    loading="eager"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {imgExplanation}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
