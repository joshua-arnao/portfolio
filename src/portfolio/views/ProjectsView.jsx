<<<<<<< HEAD
import { Container, Typography } from "@mui/material";
import { CardProject } from "../components/CardProject";
import { Link } from "react-router-dom";
import { useIsSmallScreen } from "/src/hook/useSmallScreen";

const projects = [
  {
    projectId: 1,
    title: "Rediseño rentadora de auto | App",
    description:
      "Redesigning tiket.coms Car Rentals mobile app due to high inquiries regarding the product & service",
    imgCard: "/assets/photos/PreviewRentadora.png",
    tools: ["Figma"],
  },
  {
    projectId: 2,
    title: "Proceso de Créditos | Web",
    description:
      "Este proyecto buscaba desarrollar una plataforma intermediaria entre clientes y bancos en Panamá...",
    imgCard: "/assets/photos/HomeBankiao.png",
    tools: ["React", "Marvel", "Figma"],
  },
  {
    projectId: 3,
    title: "Figma Tracking Analytics | Widget",
    description:
      "Contribuir a la comunidad de Figma al crear un widget que facilita la documentación y el seguimiento de etiquetas...",
    imgCard: "/assets/photos/PreviewWidget.png",
    tools: ["TypeScript", "Figma", "Google Analytics"],
  },
];

export const ProjectsView = ({ currentTheme }) => {
  const isSmallScreen = useIsSmallScreen();
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1

  return (
    <Container
      style={{
<<<<<<< HEAD
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h3" : "h2"}
        component="div"
        textAlign="center"
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
      >
        Proyectos trabajados
      </Typography>

<<<<<<< HEAD
      {projects.map((project) => (
        <Link
          key={project.projectId}
          to={`/projects/${project.projectId}`}
          style={{ textDecoration: "none" }}
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
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
