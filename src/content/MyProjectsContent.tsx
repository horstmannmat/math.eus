import { useTranslate } from '@tolgee/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MyProjectCardProps } from '../components/MyProjectCard';

export const MyProjectsContent = (clickAction: (() => void | null)[]) : MyProjectCardProps[] => {
  const { t } = useTranslate();

  return [
    {
      title: `(WIP) ${t('this-website')}`,
      message: t('this-website-text'),
      to: '/',
      buttonText: t('see-the-project-on-github'),
      icon: <GitHubIcon />,
      href: 'https://github.com/horstmannmat/math.eus/',
      onActionClick: clickAction[0],
    }
  ];
};
