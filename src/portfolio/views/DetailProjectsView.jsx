import { Link } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Link as Linked } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { darkTheme } from '../../theme';
import { ChipSkill } from '../components/ChipSkill';
import LinkIcon from '@mui/icons-material/Link';
import { useProjectsId } from '../../hook/useProjectsId';
import { HashLoader } from 'react-spinners';

export const DetailProjectsView = ({ currentTheme }) => {
  const { projects, loading, error } = useProjectsId();
  const { primary, background, secondary } = currentTheme.palette;

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

  if (error) {
    return <Typography color='error'>{error}</Typography>;
  }

  const {
    tools,
    title,
    description,
    link,
    rol,
    problem,
    understanding,
    breacking,
    overall,
    conclusions,
  } = projects;

  const breadcrumbs = [
    <Link to='/projects' key='1' style={{ textDecoration: 'none' }}>
      <Linked
        underline='hover'
        color={currentTheme === darkTheme ? '#fff' : '#000'}
      >
        projects
      </Linked>
    </Link>,
    <Typography key='3' color={background.primary}>
      {title}
    </Typography>,
  ];

  const getLinkText = (link) => {
    if (link.includes('github')) {
      return 'Ver el reposotorio';
    }

    return 'Ver el proyecto';
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        color={primary}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant='h2' component='div'>
        {title}
      </Typography>

      <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
        {tools.map((tool, index) => (
          <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
        ))}
      </Stack>

      <Box
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        background='#000'
      >
        {link.map((link, index) => (
          <Box
            key={index}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '22px',
                padding: '1px 8px',
                borderRadius: '6px',
                background: 'rgba(154, 230, 180, 0.16)',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  color: '#9AE6B4',
                  fontFamily: 'Inter',
                  lineHeight: '20px',
                }}
              >
                Link
              </p>
            </div>
            <Linked
              href={link}
              target='_blank'
              color={background.other.primary}
              fontSize='14px'
              sx={{
                '&:hover': {
                  color: background.other.secundary,
                  textDecoration: 'underline',
                },
              }}
            >
              {getLinkText(link)}{' '}
              <LinkIcon color={background.other.primary} fontSize='14px' />
            </Linked>
          </Box>
        ))}
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Descripción General
        </Typography>

        <Typography component='div'>
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Mi función
        </Typography>

        <Typography component='div'>
          <List>
            {/* {Object.values(rol).map((rol, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={rol} />
              </ListItem>
            ))} */}

            {rol.map((rols, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: primary }} />
                </ListItemIcon>
                <ListItemText primary={rols} />
              </ListItem>
            ))}
          </List>
        </Typography>
      </Box>

      {problem.description === '' ? (
        ''
      ) : (
        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          <Typography variant='subtitle1' component='div' width='100%'>
            Problematica y solución
          </Typography>

          <Typography component='div'>
            {problem.description}
            {'\n\n'}
            <List>
              {Object.values(problem.pareto).map((functionalities, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={functionalities} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      )}

      {understanding.description === '' ? (
        ''
      ) : (
        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          <Typography variant='subtitle1' component='div' width='100%'>
            Entendimiento
          </Typography>

          <Typography component='div'>
            {understanding.description}
            {'\n\n'}
            <List>
              {Object.values(understanding.list).map((pareto, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={pareto} />
                </ListItem>
              ))}
            </List>
          </Typography>

          <Box width='100%' display='flex' flexDirection='column' gap='16px'>
            {Object.values(understanding.images).map((image, index) => (
              <img key={index} src={image} />
            ))}
          </Box>
        </Box>
      )}

      {breacking.description === '' ? (
        ''
      ) : (
        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          <Typography variant='subtitle1' component='div' width='100%'>
            Desglosando el problema
          </Typography>

          <Typography component='div'>
            {breacking.description}
            {'\n\n'}
            <List>
              {Object.values(breacking.list).map((pareto, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={pareto} />
                </ListItem>
              ))}
            </List>
          </Typography>

          <Box width='100%' display='flex' flexDirection='column' gap='16px'>
            {Object.values(breacking.images).map((image, index) => (
              <img key={index} src={image} />
            ))}
          </Box>
        </Box>
      )}

      {overall.description === '' ? (
        ''
      ) : (
        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          <Typography variant='subtitle1' component='div' width='100%'>
            Resultados generales
          </Typography>

          <Typography component='div'>
            {overall.description}
            {'\n\n'}
            <List>
              {Object.values(overall.list).map((pareto, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={pareto} />
                </ListItem>
              ))}
            </List>
          </Typography>

          <Box width='100%' display='flex' flexDirection='column' gap='16px'>
            {Object.values(overall.images).map((image, index) => (
              <img key={index} src={image} />
            ))}
          </Box>
        </Box>
      )}

      {conclusions.description === '' ? (
        ''
      ) : (
        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          <Typography variant='subtitle1' component='div' width='100%'>
            Conclusiones
          </Typography>

          <Typography component='div'>
            {conclusions.description}
            {'\n\n'}
            <List>
              {Object.values(conclusions.list).map((pareto, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={pareto} />
                </ListItem>
              ))}
            </List>
          </Typography>

          <Box width='100%' display='flex' flexDirection='column' gap='16px'>
            {Object.values(conclusions.images).map((image, index) => (
              <img key={index} src={image} />
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
};
