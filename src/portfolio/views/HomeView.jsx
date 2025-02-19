import {
  Avatar,
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  Link
} from '@mui/material';
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { MyTimeLine, ChipSkill } from '../components/index';

import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const skills = [
  'React.js',
  'Next.js',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express.js',
  'API REST',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'GitHub',
  'Docker',
  'CI/CD',

  'UX/UI Designer',
  'Figma Avanzado',
  'Adobe XD',
  'Metodologías Ágiles',

  'Optimización de procesos',
  'Pensamiento crítico',
  'Comunicación Efectiva'
];

const experiences = [
  { year: 2016, type: 'work', title: 'Analista de Mejora de procesos' },
  { year: 2018, type: 'work', title: 'Analista Six Sigma' },
  { year: 2019, type: 'study', title: 'Curso UX/UI' },
  { year: 2020, type: 'work', title: 'Analista UX/UI' },
  {
    year: 2021,
    type: 'study',
    title: 'Especialización UI',
    link: 'https://portfolio-documents.s3.us-east-1.amazonaws.com/Joshua/certificado-medu.pdf'
  },
  {
    year: 2022,
    type: 'study',
    title: 'Desarrollo Web Fullstack',
    link: 'https://portfolio-documents.s3.us-east-1.amazonaws.com/Joshua/certificado-tecsup.pdf'
  },
  { year: 2022, type: 'work', title: 'Product Designer' },
  {
    year: 2024,
    type: 'study',
    title: 'Gestion de Proyectos en base al PMBOK',
    link: 'https://drive.google.com/file/d/10RfRqYp9Ve7Hbp0UrMvU4ohIz5YOcK9f/view'
  },
  {
    year: 2024,
    type: 'study',
    title: 'Scrum Fundamentals Certified',
    link: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JoshuaArnao-1053623.pdf'
  }
];

export const HomeView = ({ currentTheme }) => {
  const { text } = currentTheme.palette;
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid',
        padding: '24px',
        borderRadius: '20px',
        gap: '24px'
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
              Desarrollador Full Stack Jr | UX Engineer
            </Typography>
          </Box>

          <Typography component='div' textAlign='justify'>
            Apasionado por el desarrollo de aplicaciones web escalables y
            optimizadas, con experiencia en tecnologías frontend y backend,
            metodologías ágiles y diseño centrado en el usuario.
          </Typography>
          <Stack
            direction='row'
            flex
            justifyContent='flex-start'
            spacing={0.5}
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
          Soy un Desarrollador Full Stack con experiencia en Frontend y Backend,
          capaz de construir soluciones digitales desde la arquitectura hasta la
          interfaz de usuario. Mi formación en ingeniería industrial y diseño
          UX/UI me permite desarrollar productos digitales funcionales,
          intuitivos y optimizados para la experiencia del usuario.
          <br />
          <br />
          Manejo tecnologías como React, Node.js, Express y bases de datos
          SQL/NoSQL para crear aplicaciones eficientes y escalables. Mi enfoque
          se basa en la mejora continua, aplicando metodologías ágiles y buenas
          prácticas de desarrollo para entregar software de calidad.
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Skills and Tolls
        </Typography>

        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          {skills.map((skill, index) => (
            <ChipSkill key={index} label={skill} currentTheme={currentTheme} />
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
              padding: 0
            }
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
            href='https://github.com/joshua-arnao'
            target='_blank'
            rel='noopener'
          >
            <GitHubIcon color={'secondary'} />
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
