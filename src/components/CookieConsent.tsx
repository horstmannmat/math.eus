import {
  Button, Snackbar, Typography, useTheme,
} from '@mui/material';
import { PropsWithChildren, useEffect, useState } from 'react';

type CookieConsentProps = {
  // isOpen: boolean,
  message:string,
  snackbarAnchor?: {
    horizontal: 'left' | 'center' | 'right',
    vertical: 'top' | 'bottom',
  },
  onAccept?: () => void | null,
  acceptButtonLabel?: string,
  rejectButtonLabel?: string,
};
export const CookieConsent = (props:PropsWithChildren<CookieConsentProps>) => {
  const {
    message, snackbarAnchor, onAccept, acceptButtonLabel, rejectButtonLabel,
  } = props;
  const theme = useTheme();

  const [contrastAcceptColour, setContrastAcceptColour] = useState(theme.palette.mode === 'dark' ? '#0E4277' : '#7FB8F0');
  const [contrastRejectColour, setcontrastRejectColour] = useState(theme.palette.mode === 'dark' ? '#7E1B1B' : '#EBA2A2');

  useEffect(() => {
    setContrastAcceptColour(theme.palette.mode === 'dark' ? '#0E4277' : '#7FB8F0');
    setcontrastRejectColour(theme.palette.mode === 'dark' ? '#7E1B1B' : '#EBA2A2');
  }, [theme]);

  return (
    <Snackbar
      anchorOrigin={snackbarAnchor}
      open
      message={<Typography variant="body1" id="message-id">{message}</Typography>}
      action={[
        <Button
          key="accept"
          sx={{ color: contrastAcceptColour }}
          size="small"
          onClick={onAccept}
        >
          {acceptButtonLabel}
        </Button>,
        <Button
          key="reject"
          sx={{ color: contrastRejectColour }}
          size="small"
          onClick={onAccept}
        >
          {rejectButtonLabel}
        </Button>,
      ]}
    />

  );
};
