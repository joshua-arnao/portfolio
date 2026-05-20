import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useProjectsId } from '../../hook/useProjectsId';
import { useProjects } from '../../hook/useProjects';

export const DetailProjectsView = ({ currentTheme }) => {
  const { projects: project, loading, error } = useProjectsId();
  const { projects: allProjects } = useProjects();

  const { text, background, stage, border, divider, accent } =
    currentTheme.palette;

  const getStageColor = (type) => {
    const t = type?.toLowerCase();
    if (t === 'tech&tools') return stage.java;
    if (t === 'productdesigner') return stage.designer;
    return stage.ux;
  };

  const getStageName = (type) => {
    const t = type?.toLowerCase();
    if (t === 'tech&tools') return 'Java Developer';
    if (t === 'productdesigner') return 'Product Designer';
    return 'UX Engineer';
  };

  const getLinkIcon = (link) => {
    if (link?.includes('github'))
      return <GitHubIcon style={{ fontSize: '14px' }} />;
    return <LinkIcon style={{ fontSize: '14px' }} />;
  };

  const getLinkText = (link) => {
    if (link?.includes('github')) return 'Ver repositorio';
    return 'Ver proyecto';
  };

  if (loading)
    return (
      <Box style={{ padding: '48px 0', textAlign: 'center' }}>
        <Typography style={{ fontSize: '13px', color: text.secondary }}>
          Cargando proyecto...
        </Typography>
      </Box>
    );

  if (error || !project)
    return (
      <Box style={{ padding: '48px 0', textAlign: 'center' }}>
        <Typography style={{ fontSize: '13px', color: text.secondary }}>
          Proyecto no encontrado.
        </Typography>
      </Box>
    );

  const {
    title,
    description,
    tools,
    link,
    rol,
    problem,
    understanding,
    breacking,
    overall,
    conclusions,
    type,
  } = project;

  const primaryType = type?.[0];
  const stageColor = getStageColor(primaryType);

  // Navegación prev/next
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  const renderSection = (sectionTitle, section) => {
    if (!section || section.description === '') return null;
    const hasPareto = section.pareto && Object.keys(section.pareto).length > 0;
    const hasList = section.list && Object.keys(section.list).length > 0;
    const hasImages = section.images && Object.keys(section.images).length > 0;

    return (
      <Box
        style={{
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: `0.5px solid ${divider}`,
        }}
      >
        <Typography
          variant='subtitle1'
          style={{ color: text.secondary, marginBottom: '12px' }}
        >
          {sectionTitle}
        </Typography>
        <Typography
          style={{
            fontSize: '13px',
            color: text.primary,
            lineHeight: 1.7,
            marginBottom: hasList || hasPareto ? '12px' : '0',
          }}
        >
          {section.description}
        </Typography>
        {(hasPareto || hasList) && (
          <List dense style={{ padding: '0' }}>
            {Object.values(hasPareto ? section.pareto : section.list).map(
              (item, index) => (
                <ListItem key={index} style={{ padding: '2px 0' }}>
                  <ListItemIcon style={{ minWidth: '28px' }}>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: stageColor.main }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      style: {
                        fontSize: '13px',
                        color: text.primary,
                        lineHeight: 1.6,
                      },
                    }}
                  />
                </ListItem>
              ),
            )}
          </List>
        )}
        {hasImages && (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '12px',
            }}
          >
            {Object.values(section.images).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${sectionTitle} ${i + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Container style={{ padding: '0px' }}>
      {/* Breadcrumb */}
      <Box
        style={{
          paddingTop: '32px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Link
          to='/projects'
          style={{
            fontSize: '12px',
            color: text.secondary,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Proyectos
        </Link>
        <Typography style={{ fontSize: '12px', color: text.secondary }}>
          ›
        </Typography>
        <Typography style={{ fontSize: '12px', color: text.primary }}>
          {title}
        </Typography>
      </Box>

      {/* Stage badge */}
      <Box style={{ marginBottom: '12px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontWeight: 500,
            padding: '5px 12px',
            borderRadius: '8px',
            background: stageColor.bg,
            color: stageColor.light,
            border: `0.5px solid ${stageColor.border}`,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: stageColor.main,
              display: 'inline-block',
            }}
          />
          {getStageName(primaryType)}
        </span>
      </Box>

      {/* Título */}
      <Typography
        variant='h2'
        style={{ color: text.primary, marginBottom: '10px' }}
      >
        {title}
      </Typography>

      {/* Descripción */}
      <Typography
        style={{
          fontSize: '13px',
          color: text.secondary,
          lineHeight: 1.7,
          marginBottom: '20px',
          maxWidth: '520px',
        }}
      >
        {description}
      </Typography>

      {/* Links */}
      <Stack
        direction='row'
        flexWrap='wrap'
        gap='8px'
        style={{ marginBottom: '24px' }}
      >
        {link?.map((l, i) => (
          <MuiLink
            key={i}
            href={l}
            target='_blank'
            rel='noopener'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              padding: '7px 14px',
              borderRadius: '8px',
              border: `0.5px solid ${i === 0 ? stageColor.border : border.primary}`,
              color: i === 0 ? stageColor.light : text.secondary,
              background: i === 0 ? stageColor.bg : 'transparent',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: i === 0 ? 500 : 400,
            }}
          >
            {getLinkIcon(l)}
            {getLinkText(l)}
          </MuiLink>
        ))}
      </Stack>

      {/* Stack de herramientas */}
      <Box
        style={{
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: `0.5px solid ${divider}`,
        }}
      >
        <Typography
          variant='subtitle1'
          style={{ color: text.secondary, marginBottom: '10px' }}
        >
          Stack utilizado
        </Typography>
        <Stack direction='row' flexWrap='wrap' gap='6px'>
          {tools?.map((tool, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '6px',
                background: i < 3 ? stageColor.bg : background.surface,
                color: i < 3 ? stageColor.light : text.secondary,
                border: `0.5px solid ${i < 3 ? stageColor.border : border.primary}`,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {tool}
            </span>
          ))}
        </Stack>
      </Box>

      {/* Mi función */}
      {rol && rol.length > 0 && (
        <Box
          style={{
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: `0.5px solid ${divider}`,
          }}
        >
          <Typography
            variant='subtitle1'
            style={{ color: text.secondary, marginBottom: '10px' }}
          >
            Mi función
          </Typography>
          <List dense style={{ padding: '0' }}>
            {rol.map((r, i) => (
              <ListItem key={i} style={{ padding: '3px 0' }}>
                <ListItemIcon style={{ minWidth: '28px' }}>
                  <CheckIcon
                    style={{ fontSize: '14px', color: stageColor.main }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={r}
                  primaryTypographyProps={{
                    style: {
                      fontSize: '13px',
                      color: text.primary,
                      lineHeight: 1.6,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Secciones narrativas */}
      {renderSection('Problemática y solución', problem)}
      {renderSection('Entendimiento', understanding)}
      {renderSection('Desglosando el problema', breacking)}
      {renderSection('Resultados generales', overall)}
      {renderSection('Conclusiones', conclusions)}

      {/* Navegación prev/next */}
      <Box
        style={{
          display: 'flex',
          gap: '8px',
          paddingTop: '24px',
          borderTop: `0.5px solid ${divider}`,
          marginTop: '8px',
        }}
      >
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            style={{ flex: 1, textDecoration: 'none' }}
          >
            <Box
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: `0.5px solid ${border.secondary}`,
                cursor: 'pointer',
              }}
            >
              <Typography
                style={{
                  fontSize: '10px',
                  color: text.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <ArrowBackIcon style={{ fontSize: '11px' }} /> Anterior
              </Typography>
              <Typography
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: text.primary,
                }}
              >
                {prevProject.title}
              </Typography>
            </Box>
          </Link>
        ) : (
          <Box style={{ flex: 1 }} />
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            style={{ flex: 1, textDecoration: 'none' }}
          >
            <Box
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: `0.5px solid ${border.secondary}`,
                cursor: 'pointer',
                textAlign: 'right',
              }}
            >
              <Typography
                style={{
                  fontSize: '10px',
                  color: text.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '4px',
                }}
              >
                Siguiente <ArrowForwardIcon style={{ fontSize: '11px' }} />
              </Typography>
              <Typography
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: text.primary,
                }}
              >
                {nextProject.title}
              </Typography>
            </Box>
          </Link>
        )}
      </Box>
    </Container>
  );
};
