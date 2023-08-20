import { useTranslate } from '@tolgee/react';
import {
  CurriculumSectionProps,
  CurriculumSubSectionProps,
  CurriculumSkillsProps,
} from '../components';

export const CurriculumContent = (): CurriculumSectionProps[] => {
  const { t } = useTranslate();

  return [
    {
      sectionTitle: t('education'),
      subSections: [
        {
          subSectionTitle: t('Bachelor Degree'),
          subSectionOrganisation: t('University of Beer Drinking'),
          subSectionStartDate: `${t('january')} 2015`,
          subSectionEndDate: `${t('march')} 2023`,
          subSectionContent: t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure assumenda officia iusto itaque, odit sequi fuga fugit mollitia a deleniti est, odio minima officiis tempore laborum fugiat nam asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt architecto alias dignissimos voluptatibus deleniti sit cumque minima pariatur, dolores labore quo modi cupiditate quod tenetur atque! Illum, aperiam est!',
          ),
        } as CurriculumSubSectionProps,
        {
          subSectionTitle: t('high-school'),
          subSectionOrganisation: t('high-school-name'),
          subSectionStartDate: `${t('january')} 2008`,
          subSectionEndDate: `${t('december')} 2014`,
          subSectionContent: t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure assumenda officia iusto itaque, odit sequi fuga fugit mollitia a deleniti est, odio minima officiis tempore laborum fugiat nam asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt architecto alias dignissimos voluptatibus deleniti sit cumque minima pariatur, dolores labore quo modi cupiditate quod tenetur atque! Illum, aperiam est!',
          ),
        } as CurriculumSubSectionProps,
      ],
    },
    {
      sectionTitle: t('job-experience'),
      subSections: [
        {
          subSectionTitle: t('My Second Job'),
          subSectionOrganisation: t('My Second Job Company'),
          subSectionStartDate: `${t('march')} 2021`,
          subSectionEndDate: t('Present'),
          subSectionContent: t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure assumenda officia iusto itaque, odit sequi fuga fugit mollitia a deleniti est, odio minima officiis tempore laborum fugiat nam asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt architecto alias dignissimos voluptatibus deleniti sit cumque minima pariatur, dolores labore quo modi cupiditate quod tenetur atque! Illum, aperiam est!',
          ),
        } as CurriculumSubSectionProps,
        {
          subSectionTitle: t('My first job'),
          subSectionOrganisation: t('My First Job Company'),
          subSectionStartDate: `${t('january')} 2017`,
          subSectionEndDate: `${t('march')} 2021`,
          subSectionContent: t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure assumenda officia iusto itaque, odit sequi fuga fugit mollitia a deleniti est, odio minima officiis tempore laborum fugiat nam asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt architecto alias dignissimos voluptatibus deleniti sit cumque minima pariatur, dolores labore quo modi cupiditate quod tenetur atque! Illum, aperiam est!',
          ),
        } as CurriculumSubSectionProps,
      ],
    },
  ];
};

export const CurriculumSkillsContent = (): CurriculumSkillsProps[] => {
  const { t } = useTranslate();
  return [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 8, max: 10 },
        { name: 'TypeScript', level: 8, max: 10 },
        { name: 'Python', level: 8, max: 10 },
        { name: 'Bash', level: 7, max: 10 },
        { name: 'C#', level: 2, max: 10 },
      ],
    },
    {
      title: t('spoken-languages'),
      skills: [
        { name: t('english'), level: 5, max: 10 },
        { name: t('portuguese'), level: 4, max: 10 },
        { name: t('german'), level: 3, max: 10 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 4, max: 10 },
        { name: 'CSS', level: 4, max: 10 },
        { name: 'React', level: 4, max: 10 },
        { name: 'Angular', level: 3, max: 10 },
        { name: 'Vue.js', level: 3, max: 10 },
      ],
    },
  ];
};

export const CurriculumExtraContent = (): CurriculumSectionProps[] => {
  const { t } = useTranslate();

  return [
    {
      sectionTitle: t('extra-activities'),
      subSections: [

        {
          subSectionTitle: 'Member',
          subSectionLocation: 'Association of Shrek Fans',
          subSectionOrganisation: `Far Far away, ${t('brazil')}`,
          subSectionStartDate: `${t('october')} 2016`,
          subSectionContent: [
            'Weekly watches at least one Shrek Movie.',
            'Shrek Rules.',
          ],
        } as CurriculumSubSectionProps,
        {
          subSectionTitle: t('volunteer'),
          subSectionLocation: 'Consume the overproduction of beer',
          subSectionOrganisation: 'Buenos Aires, Argentina',
          subSectionStartDate: `${t('november')} 2017`,
          subSectionEndDate: `${t('november')} 2017`,
          subSectionContent: 'Drinker.',
        } as CurriculumSubSectionProps,
      ],
    },
    {
      sectionTitle: t('writing-publications'),
      subSections: [
        {
          subSectionTitle: t('published-articles'),
          subSectionOrganisation: 'Journal of space exploration',
          subSectionStartDate: `${t('march')} 2018`,
          subSectionContent: 'Title: Exploring the other side of the moon',
        } as CurriculumSubSectionProps,
        {
          subSectionTitle: 'Conference Presentation',
          subSectionOrganisation: 'International Beer Conference',
          subSectionStartDate: `${t('june')} 2019`,
          subSectionContent: 'Title: The Future of Beer: Trends and Challenges',
        } as CurriculumSubSectionProps,
      ],
    },
    {
      sectionTitle: t('honors-awards'),
      subSections: [
        {
          subSectionTitle: '1st Place - Beer Drinking Competition',
          subSectionLocation: 'Berlin, Germany',
          subSectionOrganisation: 'Munich OktoberFest',
          subSectionStartDate: `${t('september')} 2020`,
          subSectionContent: 'Awarded for outstanding performance drinking 1 Liter beer mug.',
        } as CurriculumSubSectionProps,
        {
          subSectionTitle: 'Certificate of Achievement',
          subSectionOrganisation: 'International Beer Drinking Symposium',
          subSectionStartDate: `${t('october')} 2021`,
          subSectionContent: 'Recognized for significant drinking beer skills.',
        } as CurriculumSubSectionProps,
      ],
    },
  ];
};
// #endregion
