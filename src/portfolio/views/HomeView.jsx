import {
  Avatar,
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSkills } from '../../hook/useSkills';
import { useExperiences } from '../../hook/useExperiences';
import { ChipSkill } from '../components/index';

export const HomeView = ({ currentTheme }) => {
  const { skills, loading: loadingSkills } = useSkills();
  const { experiences, loading: loadingExp } = useExperiences();

  const { text, background, stage, accent, border, divider } =
    currentTheme.palette;

  const isDark = currentTheme.palette.mode === 'dark';

  const getStageColor = (type) => {
    const t = type?.toLowerCase();
    if (t === 'tech&tools') return stage.java;
    if (t === 'productdesigner') return stage.designer;
    if (t === 'softskill') return stage.ux;
    if (t === 'frontend') return stage.ux;
    return stage.java;
  };

  return (
    <Container style={{ padding: '0px' }}>
      {/* ── HERO ── */}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '32px 0 28px',
          borderBottom: `0.5px solid ${divider}`,
          marginBottom: '28px',
        }}
      >
        {/* Available badge */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: stage.ux.main,
              display: 'inline-block',
            }}
          />
          <Typography
            style={{
              fontSize: '12px',
              color: stage.ux.main,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Disponible para nuevos roles
          </Typography>
        </Box>

        {/* Avatar + Name */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar
            alt='Joshua Arnao Canessa'
            src='/assets/photos/joshua-arnao.png'
            sx={{ width: 64, height: 64 }}
            style={{ border: `2px solid ${border.primary}` }}
          />
          <Box>
            <Typography
              variant='h2'
              style={{ color: text.primary, marginBottom: '2px' }}
            >
              Joshua Arnao Canessa
            </Typography>
            <Typography
              style={{
                fontSize: '13px',
                color: accent.amber,
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Java Backend Developer · AI Engineering
            </Typography>
          </Box>
        </Box>

        {/* Bio */}
        <Typography
          style={{
            fontSize: '13px',
            color: text.secondary,
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Construyo sistemas backend que integran IA en flujos reales de
          trabajo. Con más de 5 años en diseño de producto, entiendo el problema
          antes de escribir la primera línea de código.
        </Typography>

        {/* Contact chips */}
        <Stack direction='row' flexWrap='wrap' gap='8px'>
          <Chip
            icon={<EmailIcon style={{ fontSize: '14px' }} />}
            label='joshua.arnao.canessa@gmail.com'
            size='small'
            style={{
              fontSize: '11px',
              color: text.secondary,
              background: background.paper,
              border: `0.5px solid ${border.primary}`,
            }}
          />
          <Chip
            icon={<PlaceIcon style={{ fontSize: '14px' }} />}
            label='Lima, Perú'
            size='small'
            style={{
              fontSize: '11px',
              color: text.secondary,
              background: background.paper,
              border: `0.5px solid ${border.primary}`,
            }}
          />
        </Stack>

        {/* Social links */}
        <Stack direction='row' gap='8px' alignItems='center'>
          <Link
            href='https://pe.linkedin.com/in/joshua-arnao-canessa-832090213'
            target='_blank'
            rel='noopener'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: text.secondary,
              textDecoration: 'none',
              padding: '5px 12px',
              border: `0.5px solid ${border.primary}`,
              borderRadius: '8px',
            }}
          >
            <LinkedInIcon style={{ fontSize: '14px' }} />
            LinkedIn
          </Link>
          <Link
            href='https://github.com/joshua-arnao'
            target='_blank'
            rel='noopener'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: text.secondary,
              textDecoration: 'none',
              padding: '5px 12px',
              border: `0.5px solid ${border.primary}`,
              borderRadius: '8px',
            }}
          >
            <GitHubIcon style={{ fontSize: '14px' }} />
            GitHub
          </Link>
        </Stack>
      </Box>

      {/* ── EXPERIENCIA RECIENTE ── */}
      <Box
        style={{
          marginBottom: '28px',
          paddingBottom: '28px',
          borderBottom: `0.5px solid ${divider}`,
        }}
      >
        <Typography
          variant='subtitle1'
          style={{ color: text.secondary, marginBottom: '16px' }}
        >
          Experiencia reciente
        </Typography>

        {loadingExp ? (
          <Typography style={{ fontSize: '12px', color: text.secondary }}>
            Cargando...
          </Typography>
        ) : (
          <Box
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {experiences
              .filter((e) => e.type === 'work')
              .slice(0, 2)
              .map((exp, index) => {
                const color = index === 0 ? stage.java : stage.ux;
                return (
                  <Box
                    key={exp.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: '3px',
                        height: '36px',
                        background: color.main,
                        borderRadius: '2px',
                        flexShrink: 0,
                      }}
                    />
                    <Box style={{ flex: 1 }}>
                      <Typography
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: text.primary,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {exp.title.split('—')[0].trim()}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '11px',
                          color: text.secondary,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {exp.title.split('—')[1]?.trim()} · {exp.year}
                      </Typography>
                    </Box>
                    {index === 0 && (
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 500,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: color.bg,
                          color: color.light,
                          border: `0.5px solid ${color.border}`,
                        }}
                      >
                        Actual
                      </span>
                    )}
                  </Box>
                );
              })}
          </Box>
        )}
      </Box>

      {/* ── STACK TÉCNICO ── */}
      <Box style={{ marginBottom: '28px' }}>
        <Typography
          variant='subtitle1'
          style={{ color: text.secondary, marginBottom: '16px' }}
        >
          Stack técnico
        </Typography>

        {loadingSkills ? (
          <Typography style={{ fontSize: '12px', color: text.secondary }}>
            Cargando...
          </Typography>
        ) : (
          <Box
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {[
              { label: 'Backend · AI', type: 'tech&tools' },
              { label: 'Frontend', type: 'frontend' },
              { label: 'Diseño · UX', type: 'productdesigner' },
              { label: 'Soft Skills', type: 'softskill' },
            ].map(({ label, type }) => {
              const filtered = skills.filter((s) => s.type === type);
              if (filtered.length === 0) return null;
              const color = getStageColor(type);
              return (
                <Box
                  key={type}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '11px',
                      color: text.secondary,
                      minWidth: '80px',
                      paddingTop: '4px',
                      flexShrink: 0,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {label}
                  </Typography>
                  <Stack direction='row' flexWrap='wrap' gap='6px'>
                    {filtered.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: color.bg,
                          color: color.light,
                          border: `0.5px solid ${color.border}`,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </Stack>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Container>
  );
};
