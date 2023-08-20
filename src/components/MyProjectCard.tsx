import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type MyProjectCardProps = {
  buttonText: string;
  message: string;
  title: string;
  to: string;
  href: string;
  disable?: boolean;
  icon?: ReactNode;
  imgPath?: string;
  imgAltText?: string;
  sx?: SxProps<Theme>;
  onActionClick?: () => void | null;
  onButtonClick?: () => void | null;
};

export const MyProjectCard = (props: PropsWithChildren<MyProjectCardProps>) => {
  const {
    message,
    disable,
    imgPath,
    imgAltText,
    icon,
    title,
    to,
    href,
    buttonText,
    onButtonClick,
    onActionClick,
  } = props;
  return (
    <Grid item xs={1}>
      <Card
        sx={{
          minHeight: '100%',
          maxWidth: 345,
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* <CardActionArea component={Link} disabled={disable} to={to} sx={{ minHeight: { xs: 310, sm: 275, md: 275 } }} onClick={onActionClick}> */}
        <CardActionArea
          component={Link}
          disabled={disable}
          to={to}
          onClick={onActionClick}
        >
          {imgPath ? (
            <CardMedia
              component="img"
              height="140"
              image={imgPath}
              alt={imgAltText}
              loading="eager"
            />
          ) : null}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ wordWrap: 'break-word' }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ wordWrap: 'break-word' }}
            >
              {message}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={onButtonClick}
            size="small"
            disabled={disable}
            startIcon={icon}
            color="primary"
            href={href}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
