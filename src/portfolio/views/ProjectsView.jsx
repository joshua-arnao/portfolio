import { useState } from 'react';
import { useProjects } from '../../hook/useProjects';
import { Container, Typography, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';

export const ProjectsView = ({ currentTheme }) => {
  const { projects, loading, error } = useProjects();
  const isSmallScreen = useIsSmallScreen();
  const [activeStage, setActiveStage] = useState('todos');

  const { text, background, stage, border, divider, accent } =
    currentTheme.palette;

  const stages = [
    { key: 'todos', label: 'Todos' },
    { key: 'tech&tools', label: 'Java Developer', color: stage.java },
    {
      key: 'productdesigner',
      label: 'Product Designer',
      color: stage.designer,
    },
  ];

  const getStageByType = (type) => {
    const t = type?.toLowerCase();
    if (t === 'tech&tools') return stage.java;
    if (t === 'productdesigner') return stage.designer;
    if (t === 'ux') return stage.ux;
    return stage.java;
  };

  const filteredProjects =
    activeStage === 'todos'
      ? projects
      : projects.filter((p) => p.type?.includes(activeStage));

  if (loading)
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          padding: '48px 0',
        }}
      >
        <Typography style={{ fontSize: '13px', color: text.secondary }}>
          Cargando proyectos...
        </Typography>
      </Box>
    );

  if (error)
    return (
      <Typography style={{ fontSize: '13px', color: text.secondary }}>
        Error cargando proyectos.
      </Typography>
    );

  return (
    <Container style={{ padding: '0px' }}>
      {/* Header */}
      <Box
        style={{
          paddingTop: '32px',
          paddingBottom: '24px',
          borderBottom: `0.5px solid ${divider}`,
          marginBottom: '24px',
        }}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <Typography
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: text.primary,
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            Proyectos
          </Typography>
          <Typography style={{ fontSize: '11px', color: text.secondary }}>
            {projects.length} proyectos · {stages.length - 1} etapas
          </Typography>
        </Box>

        {/* Filtros de etapa */}
        <Stack direction='row' flexWrap='wrap' gap='6px'>
          {stages.map(({ key, label, color }) => {
            const isActive = activeStage === key;
            return (
              <button
                key={key}
                onClick={() => setActiveStage(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: isActive ? 500 : 400,
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: `0.5px solid ${isActive ? border.primary : border.secondary}`,
                  background: isActive ? background.paper : 'transparent',
                  color: isActive ? text.primary : text.secondary,
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.15s',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: color ? color.main : text.secondary,
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                {label}
              </button>
            );
          })}
        </Stack>
      </Box>

      {/* Grid de proyectos */}
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr',
          gap: '10px',
        }}
      >
        {filteredProjects.map((project) => {
          const primaryType = project.type?.[0];
          const stageColor = getStageByType(primaryType);

          return (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                style={{
                  background: background.paper,
                  border: `0.5px solid ${project.featured ? stageColor.main : border.secondary}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
              >
                {/* Franja de color top */}
                <div
                  style={{
                    height: '5px',
                    background: stageColor.main,
                  }}
                />

                {/* Imagen */}
                <Box
                  style={{
                    height: '110px',
                    background: background.surface,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: `0.5px solid ${border.secondary}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {project.imgCard ? (
                    <img
                      src={project.imgCard}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <Typography
                      style={{ fontSize: '28px', color: border.primary }}
                    >
                      ⬡
                    </Typography>
                  )}

                  {/* Badge etapa */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      fontSize: '10px',
                      fontWeight: 500,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: stageColor.bg,
                      color: stageColor.light,
                      border: `0.5px solid ${stageColor.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: stageColor.light,
                        display: 'inline-block',
                      }}
                    />
                    {primaryType === 'tech&tools'
                      ? 'Java Developer'
                      : primaryType === 'productdesigner'
                        ? 'Product Designer'
                        : 'UX Engineer'}
                  </span>

                  {/* Badge destacado */}
                  {project.featured && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        fontSize: '10px',
                        fontWeight: 500,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: stageColor.bg,
                        color: stageColor.light,
                        border: `0.5px solid ${stageColor.border}`,
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      ★ Destacado
                    </span>
                  )}
                </Box>

                {/* Body */}
                <Box style={{ padding: '12px' }}>
                  <Typography
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: text.primary,
                      marginBottom: '4px',
                      lineHeight: 1.3,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '11px',
                      color: text.secondary,
                      lineHeight: 1.5,
                      marginBottom: '10px',
                    }}
                  >
                    {project.description?.length > 80
                      ? `${project.description.slice(0, 80)}...`
                      : project.description}
                  </Typography>

                  {/* Tags + arrow */}
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack direction='row' flexWrap='wrap' gap='4px'>
                      {project.tools?.slice(0, 3).map((tool, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '10px',
                            padding: '2px 7px',
                            borderRadius: '4px',
                            border: `0.5px solid ${i < 2 ? stageColor.border : border.secondary}`,
                            color: i < 2 ? stageColor.light : text.secondary,
                            background: i < 2 ? stageColor.bg : 'transparent',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools?.length > 3 && (
                        <span
                          style={{
                            fontSize: '10px',
                            padding: '2px 7px',
                            borderRadius: '4px',
                            border: `0.5px solid ${border.secondary}`,
                            color: text.secondary,
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </Stack>
                    <Typography
                      style={{ fontSize: '14px', color: text.secondary }}
                    >
                      →
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};
