import { Container } from '@mui/material';
import {
  CurriculumSection, CurriculumSectionProps, HTMLComment, CurriculumSkillsProps, CurriculumSkills,
} from '../components';
// import { CurriculumFakeContent, CurriculumFakeExtra, CurriculumFakeSkill } from "../content";
import { CurriculumContent, CurriculumExtraContent, CurriculumSkillsContent } from '../content';

export const Curriculum = () => {
  const curriculumSections: CurriculumSectionProps[] = CurriculumContent();
  const extraSections: CurriculumSectionProps[] = CurriculumExtraContent();
  const skillSections: CurriculumSkillsProps[] = CurriculumSkillsContent();

  // const curriculumSections: CurriculumSectionProps[] = CurriculumFakeContent();
  // const extraSections: CurriculumSectionProps[] = CurriculumFakeExtra();
  // const skillSections: CurriculumSkillsProps[] = CurriculumFakeSkill();
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <HTMLComment comment="This webpage was highly inspired by https://reactcurriculum.com/
        Although it has no code in common, I would like to thank the author for the inspiration.
        You can find the source code of his webpage at https://github.com/tbakerx/react-curriculum-template/
        My code was made by using React and Material UI framework."/>
      {curriculumSections.map((curriculumSection, index) => (
        <CurriculumSection key={index} {...curriculumSection} renderDivider={curriculumSections.length - 1 !== index} />
      ))}
      <CurriculumSkills curriculumSkills={skillSections} />
      {extraSections.map((curriculumSection, index) => (
        <CurriculumSection key={index} {...curriculumSection} renderDivider={extraSections.length - 1 !== index} />
      ))}
    </Container>
  );
};
