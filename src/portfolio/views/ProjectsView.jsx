import { useProjects } from '../../hook/useProjects';
import { Container, Typography } from '@mui/material';
import { CardProject } from '../components/CardProject';
import { Link } from 'react-router-dom';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';
import { Box, Stack } from '@mui/system';
import { HashLoader } from 'react-spinners';
import { SkillTag } from '../components/index';
import { useSkills } from '../../hook/useSkills';

export const ProjectsView = ({ currentTheme }) => {
  const { projects, loading, error } = useProjects();
  const { skills } = useSkills();
  const isSmallScreen = useIsSmallScreen();
  const { secondary } = currentTheme.palette;

  if (loading)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <HashLoader size={40} color={secondary.main} />
        <Typography>Cargando...</Typography>
      </Box>
    );
  if (error) return <Typography>Error: {error}</Typography>;

  const allTypes = projects.flatMap((project) => project.type);
  const uniqueTypes = [...new Set(allTypes)];

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <Typography
        variant={isSmallScreen ? 'h3' : 'h2'}
        component='div'
        textAlign='center'
      >
        Proyectos trabajados
      </Typography>

      <Stack
        direction='row'
        spacing={1}
        useFlexGap
        flexWrap='wrap'
        justifyContent='center'
      >
        {uniqueTypes.map((type, index) => (
          <SkillTag key={index} uniqueType={type} currentTheme={currentTheme} />
        ))}
      </Stack>

      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          style={{ textDecoration: 'none' }}
        >
          <CardProject
            project={project}
            isSmallScreen={isSmallScreen}
            currentTheme={currentTheme}
          />
        </Link>
      ))}
    </Container>
  );
};
