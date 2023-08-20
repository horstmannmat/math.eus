import { useTranslate } from '@tolgee/react';
import { Link } from '@mui/material';
import { HomeCardProps } from '../components/HomeCard';

export const HomeContent = () : HomeCardProps[] => {
  const { t } = useTranslate();
  const profileImage = 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean_auguste_dominique_ingres_-_cristo_aben%C3%A7oador_01.jpg';

  return [
    {
      title: t('home-page-main-title'),
      content: t('home-page-main-content'),
      imgExplanation: t('home-page-main-img-explanation'),
      imgPath: profileImage,
      imgAltText: t('home-page-main-img-alt-text'),
    },
    {
      title: t('home-page-hobbies-title'),
      content: <>
        {' '}
        <p>{t('home-page-hobbies-content1')}</p>
        {' '}
        <p>{t('home-page-hobbies-content2')}</p>
               </>,
    },
    {
      title: t('home-page-blog-title'),
      content: t('home-page-blog-content'),
    },
    {
      title: t('home-page-portfolio-title'),
      content: t('home-page-portfolio-content'),
    },
    {
      title: t('home-page-get-in-touch-title'),
      content:
  <>
    {t('home-page-get-in-touch-content')}
    {' '}
    <Link underline="hover" href="">LinkedIn</Link>
    {' '}
    {t('word-and')}
    {' '}
    <Link underline="hover" href="">GitHub</Link>

  </>,
    },
  ];
};
