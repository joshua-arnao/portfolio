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
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const skills = [
  'Metodologías Ágiles',
  'Adaptabilidad',
  'Figma Avanzado',
  'Adobe XD',
  'UX/UI Designer',
  'Excel Avanzado',
  'AppScript',
  'Looker Studio',
  'Análisis de datos',
  'Notion',
  'Frontend',
  'React JS',
  'HTML',
  'CSS',
  'Comunicación efectiva',
  'Bizagi',
  'Google Analytics',
  'IA Generativa',
  'Gestión de proyectos',
  'Optimización de procesos',
  'Pensamiento crítico'
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
              Ingeniero Industrial
            </Typography>
          </Box>

          <Typography component='div' textAlign='justify'>
            Diseñador de productos digitales con experiencia en metodología
            Agile, Design Thinking y CPS.{' '}
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
          Soy un apasionado Diseñador de Productos Digitales con un deseo
          constante de innovar y mejorar. Siempre estoy buscando nuevas formas
          de combinar la creatividad, la eficiencia y la mejora en la
          experiencia del usuario.
          <br />
          Mi formación en ingeniería industrial y mi amplia experiencia en
          diseño me han inculcado la importancia de encontrar el equilibrio
          entre la estética y la funcionalidad. Mi misión es crear experiencias
          digitales que no solo atraigan visualmente, sino que también
          solucionen problemas reales. Con un enfoque metódico y una pasión
          insaciable por el aprendizaje, abordo los desafíos con eficacia y
          desvelo soluciones innovadoras.
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
