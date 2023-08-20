import { Divider, Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';

export type CurriculumSubSectionProps = {
  subSectionTitle: string;
  subSectionLocation?: string;
  subSectionOrganisation: string;
  subSectionStartDate?: string;
  subSectionEndDate?: string;
  subSectionContent: string | string[] | ReactNode;
};

export type CurriculumSectionProps = {
  sectionTitle: string;
  subSections: CurriculumSubSectionProps[];
  renderDivider?: boolean;
};


const CurriculumSubSectionContent = (props: { content: string | string[] | ReactNode; }) => {
  const { content } = props;
  if (typeof content === 'string') {
    <Typography variant="body1" component="div" gutterBottom paragraph align="justify">
      {content}
    </Typography>;
  }

  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, index) => (
          <Typography
            key={`subSectionContent_${index}`}
            variant="body1"
            gutterBottom
            paragraph
            component="div"
            align="justify"
            sx={(index === content.length - 1) ? { marginBottom: '3rem' } : {}}
          >
            {item}
          </Typography>
        ))}
      </>
    );
  }

  return <> {content} </>;
};

const CurriculumSubSection = (props: CurriculumSubSectionProps) => {
  const {
    subSectionTitle,
    subSectionLocation,
    subSectionOrganisation,
    subSectionStartDate,
    subSectionEndDate,
    subSectionContent,
  } = props;
  return (
    <>
      <Typography
        variant="h6"
        fontWeight="bold"
        component="h3"
        sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}
      >
        {subSectionTitle}
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowGap={1}
        columns={subSectionLocation ? 8 : 5}
        sx={[{ marginTop: '1rem', flexWrap: 'nowrap' }, subSectionContent ? { marginBottom: '3rem' } : {}]}
      >
        <Grid item xs={2} xl={2} sm={2} md={2}>
          <Typography variant="subtitle1" fontStyle="italic" align="center">
            {subSectionOrganisation}
          </Typography>
        </Grid>

        {subSectionLocation && (
          <>
            <Grid item xs={1} xl={1} sm={1} md={1}>
              <Typography
                variant="subtitle1"
                fontStyle="italic"
                align="center"
                sx={{ alignSelf: 'center', flexBasis: 'fit-content' }}
              >
                &bull;
              </Typography>
            </Grid>
            <Grid item xs={2} xl={2} sm={2} md={2}>
              <Typography variant="subtitle1" fontStyle="italic" align="center">
                {subSectionLocation}
              </Typography>
            </Grid>
          </>
        )}

        <Grid item xs={1} xl={1} sm={1} md={1}>
          <Typography
            variant="subtitle1"
            fontStyle="italic"
            align="center"
            sx={{ alignSelf: 'center', flexBasis: 'fit-content' }}
          >
            &bull;
          </Typography>
        </Grid>

        <Grid item xs={2} xl={2} sm={2} md={2}>
          <Typography variant="subtitle1" fontStyle="italic" align="center">
            {subSectionStartDate}
            {' '}
            {subSectionEndDate && (` - ${subSectionEndDate}`)}
          </Typography>
        </Grid>
      </Grid>

      {subSectionContent && (<CurriculumSubSectionContent content={subSectionContent} />)}
    </>
  );
};


export const CurriculumSection = (props: CurriculumSectionProps) => {
  const { sectionTitle, subSections, renderDivider } = props;

  return (
    <>
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
            sx={{
              textDecoration: 'underline',
              textUnderlineOffset: 10,
              textTransform: 'uppercase',
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              marginBottom: '1rem',
            }}
            fontWeight="bold"
            display="inline"
          >
            {sectionTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          {subSections.map((subSection, index) => (
            <CurriculumSubSection key={`subSection_${index}`} {...subSection} />
          ))}
        </Grid>
      </Grid>
      {renderDivider ? (
        <Divider
          sx={{ borderTop: 3, marginTop: '2.5rem', marginBottom: '2.5rem' }}
          light
        />
      ) : null}
    </>
  );
};