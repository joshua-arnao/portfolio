import { useProjects } from "../../hook/useProjects";
import { Container, Typography } from "@mui/material";
import { CardProject } from "../components/CardProject";
import { Link } from "react-router-dom";
import { useIsSmallScreen } from "/src/hook/useSmallScreen";
import { Box } from "@mui/system";
import { HashLoader } from "react-spinners";

export const ProjectsView = ({ currentTheme }) => {
  const { projects, loading, error } = useProjects();
  const isSmallScreen = useIsSmallScreen();
  const {secondary} = currentTheme.palette

  if (loading)
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap:"16px" }}
      >
        <HashLoader size={40} color={secondary.main}/>
        <Typography>Cargando...</Typography>
      </Box>
    );
  if (error) return <Typography>Error: {error}</Typography>;

  console.log(projects);

  return (
    <Container
      style={{
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
      >
        Proyectos trabajados
      </Typography>

      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          style={{ textDecoration: "none" }}
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
