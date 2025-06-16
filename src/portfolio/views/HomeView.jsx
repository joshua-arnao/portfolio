import {
  Avatar,
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { MyTimeLine, ChipSkill, SkillTag } from '../components/index';

import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useSkills } from '../../hook/useSkills';
import { HashLoader } from 'react-spinners';
import { useExperiences } from '../../hook/useExperiences';

export const HomeView = ({ currentTheme }) => {
  const { skills, loading } = useSkills();
  const { experiences } = useExperiences();
  const { text, secondary } = currentTheme.palette;

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

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid',
        padding: '24px',
        borderRadius: '20px',
        gap: '24px',
      }}
    >
      <Box display='flex' flexDirection='column' alignItems='center' gap='16px'>
        <Avatar
          alt='Joshua Arnao Canessa'
          src='/assets/photos/joshua-arnao.png'
          sx={{ width: 176, height: 176 }}
          style={{ border: '4px solid' }}
        />

        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap='24px'
          style={{ width: '100%' }}
        >
          <Box>
            <Typography variant='h2' component='div' textAlign='center'>
              Joshua Arnao Canessa
            </Typography>
            <Typography variant='subtitle1' component='div' textAlign='center'>
              Product Designer & UX Engineer
            </Typography>
          </Box>

          <Typography
            component='div'
            textAlign='justify'
            sx={{ fontStyle: 'italic' }}
          >
            “Diseño estratégico centrado en el usuario.”
          </Typography>

          <Stack
            direction='row'
            flex
            justifyContent='flex-start'
            // spacing={0.5}
            flexWrap='wrap'
            gap='8px'
            width='100%'
          >
            <Chip
              icon={<EmailIcon />}
              label='joshua.arnao@icloud.com'
              style={{ color: text.other, fontSize: '13px' }}
            />
            <Chip
              icon={<PlaceIcon />}
              label='Lima, Perú'
              style={{ color: text.other, fontSize: '13px' }}
            />
            <Chip
              icon={<CakeIcon />}
              label='28 de Junio'
              style={{ color: text.other, fontSize: '13px' }}
            />
          </Stack>
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div'>
          About
        </Typography>

        <Typography component='div' textAlign='justify'>
          Soy Product Designer con enfoque estratégico y background en
          desarrollo Frontend y backend. Cuento con más de 5 años de experiencia
          diseñando y desarrollando soluciones digitales escalables y centradas
          en el usuario. Mi formación en Ingeniería Industrial y especialización
          en UX/UI me permiten abordar desafíos complejos desde una mirada
          analítica, técnica y empática.
          <br />
          <br />
          He trabajado desde el descubrimiento de necesidades hasta el diseño e
          implementación de interfaces funcionales en entornos ágiles,
          colaborando con equipos multidisciplinarios de producto y tecnología.
          Mi experiencia incluye investigación con usuarios, diseño de flujos,
          wireframes, prototipos, QA funcional/visual y documentación clara para
          desarrolladores.
          <br />
          <br />
          Manejo herramientas como Figma (nivel avanzado), y tecnologías como
          React, Node.js y bases de datos SQL/NoSQL. Esto me permite facilitar
          la comunicación con equipos técnicos, liderar la evolución de sistemas
          de diseño y asegurar soluciones viables, escalables y alineadas con
          los objetivos de negocio.
          <br />
          <br />
          Mi enfoque está en la mejora continua, la colaboración
          multidisciplinaria y la entrega de soluciones digitales de alto
          impacto que generen valor real para el negocio y los usuarios.
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Skills and Tolls
        </Typography>

        <Stack
          direction='row'
          spacing={1}
          useFlexGap
          flexWrap='wrap'
          justifyContent='center'
        >
          {[...new Set(skills.map((skill) => skill.type))].map(
            (uniqueType, index) => (
              <SkillTag
                key={index}
                uniqueType={uniqueType}
                currentTheme={currentTheme}
              />
            )
          )}
        </Stack>

        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          {skills.map((skill, index) => (
            <ChipSkill
              key={index}
              label={skill.name}
              currentTheme={currentTheme}
              colorCategory={skill.type}
            />
          ))}
        </Stack>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Experience
        </Typography>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experiences.map((experience, index) => (
            <MyTimeLine
              experience={experience}
              key={index}
              currentTheme={currentTheme}
            />
          ))}
        </Timeline>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Links
        </Typography>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Link
            href='https://pe.linkedin.com/in/joshua-arnao-canessa-832090213'
            target='_blank'
            rel='noopener'
          >
            <LinkedInIcon color={'secondary'} />
          </Link>

          <Link
            href='https://www.figma.com/@joshuaarnao'
            target='_blank'
            rel='noopener'
          >
            <img
              style={{ height: '18px', width: '18px', color: '#FFF' }}
              src='/assets/photos/figma-logo.svg'
            />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};
