import { PropsWithChildren } from 'react';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Divider, Box, SxProps, Theme } from '@mui/material';
import { useTranslate } from '@tolgee/react';

export type SausageBarProps = {
  value: number;
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  sx?: SxProps<Theme>;
};

export type Skill = {
  name: string;
  level: number;
  max?: number;
};

export type CurriculumSkillsProps = {
  title: string;
  skills: Skill[];
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// const SausageBar = (props: SausageBarProps) => {
//   const {value, sx, variant} = props;
//   const filledUnits = Math.ceil(value/10);

//   return (
//     <Box sx={[{display:'flex', flexDirection:'row',  width:'80%', ...sx}]}>
//       {Array.from(Array(10).keys()).map(i => {
//         return <BorderLinearProgress variant={variant} sx={{ width: '10%'}} value={i <= filledUnits ? 100 : 0 } />;
//       })}
//     </Box>
//   );
// };

const SkillPercentage = (props: Skill) => {
  const { name, level, max = 10 } = props;
  const percentage = Math.round((level / max) * 100);

  return (
    // <div style={{display:'flex', flexDirection:'row', alignItems:'baseline', justifyContent:'center'}}>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:{ xs: 'center', sm: 'baseline', md: 'baseline' }}}>
      <Typography variant="subtitle1" fontStyle="bold" sx={{ textAlign: { xs: 'center', sm: 'center', md: 'justify' } }}>
        {name}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        // sx={{ width: {xs:'75%', sm:'80%', md: '80%'}, marginBottom: '1rem' }}
        sx={{ width:'80%', marginBottom: '1rem' }}
        value={percentage}
      />
    </Box>
  );
};

export const CurriculumSkills = (props: PropsWithChildren<{ curriculumSkills: CurriculumSkillsProps[] }>) => {
  const { curriculumSkills } = props;
  const { t } = useTranslate();
  return (
    <>
      <Divider sx={{ borderTop: 3, marginBottom: '2.5rem' }} light />
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: { xs: 'grid', sm: 'grid', md: 'flex' } }}
        >
          <Typography
            variant="h6"
            component="h2"
            align="center"
            sx={{
              textDecoration: 'underline',
              textUnderlineOffset: 10,
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
            fontWeight="bold"
            display="inline"
          >
            {t('skills')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            paragraph
            sx={{ textAlign: { xs: 'center', sm: 'center', md: 'justify' } }}
          >
            {t('curriculum-skills-text')}
          </Typography>
          <Grid
            container
            direction="row"
            columns={{ xs: 1, sm: 2, md: 2 }}
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={4}
          >
            {curriculumSkills.map((skillType) => (
              <Grid key={skillType.title} item xs={1} xl={1} sm={1} md={1}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  component="h3"
                  sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}
                >
                  {skillType.title}
                </Typography>
                {skillType.skills.map((skill, index) => (
                  <SkillPercentage key={`${skill.name}_${index}`} {...skill} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{ borderTop: 3, marginTop: '2.5rem', marginBottom: '2.5rem' }}
        light
      />
    </>
  );
};

