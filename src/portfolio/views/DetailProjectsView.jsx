<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
import {
  Box,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
<<<<<<< HEAD
  Typography
} from '@mui/material';
import { Link as Linked } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { darkTheme } from '../../theme/darkTheme';
import { ChipSkill } from '../components/ChipSkill';
import LinkIcon from '@mui/icons-material/Link'

const projects = [
  {
    projectId: 1,
    link: [],
    title: 'Rediseño rentadora de auto | App',
    tools: ['Figma'],
    description:
      'Este proyecto se centra en mejorar la aplicación móvil de una rentadora de autos en Cusco Perú, resolviendo los puntos críticos que enfrentan los usuarios durante el uso del producto.\n\nDebido a la confidencialidad del trabajo, no es posible mostrar el caso de estudio completo.',
    rol: [
      'Realizar investigación de usuarios para identificar puntos débiles de la aplicación.',
      'Generar ideas y refinar múltiples soluciones.',
      'Probar soluciones mediante pruebas de usabilidad.',
      'Finalizar diseños y lanzar la actualización.'
    ],
    problem: {
      description:
        'En el periodo de Julio del 2020 a Diciembre del 2021 see recebieron una gran cantidad de quejas y consultas relacionadas con el alquiler de autos. Estas son:',
      pareto: [
        'Cómo alquilar autos desde el app',
        'Problemas con los pagos',
        'Consultas sobre cobertura',
        'Información general sobre el alquiler de autos'
      ]
    },
    understanding: {
      description:
        'La empresa ofrece el servicio de renta de autos para turistas en el departamento del Cusco este servicio se ofrece con o sin conductor.',
      list: [
        'Los usuarios deben de ingresan la ciudad de alquiler, la fecha y hora de recojo, y duración del alquiler.',
        'Los usuarios eligen el tipo de auto, la lista de proveedores que ofrecen ese tipo de auto y el paquete que ofrece la empresa.',
        'Los usuarios obtienen información sobre el tipo de auto, el proveedor y el paquete elegido.',
        'Los usuarios ingresa la ubicación de recojo y/o devolución dle auto, junto con zonas adicionales que desea visitar.'
      ],
      images: [
        '/assets/photos/Backgound&Problem.png',
      ]
    },
    breacking: {
      description:
        'Se realizarón los siguientes métodos de investigación con la finalidad de entender mejor el problema:',
      list: [
        'Entrevistas a usuarios a partir de reclamos de servicio al cliente.',
        'Análisis UX (analizando el recorrido del usuario en la aplicación: dónde se realizan interacciones y dónde abandonan el proceso).',
        'Workshops para generar ideas sobre posibles problemas y soluciones',
        'Iteración del diseño y pruebas de usabilidad.'
      ],
      images: [
        '/assets/photos/InquiriesProblem.png',
        '/assets/photos/SoluctionsProblem.png'
      ]
    },
    overall: {
      description: 'Los cambios mejorán lo siguiente',
      list: [
        'Página de inicio rediseñada (la función adicional conduce a un 25,8% de aumento en la tasa de conversión de reservas).',
        'Página de revisión de reserva, zonas adicionales y formulario de reserva rediseñadas (aumento del 19,8%).',
        'Disminución de quejas y consultas en un 5%.'
      ],
      images: ['/assets/photos/ABTesting.png']
    },
    conclusions: {
      description: '',
      list: [
        'Aprendí a analizar las rutas de los usuarios a través de herramientas analíticas.',
        'Aprendí a tener en cuenta las numerosas quejas de los usuarios mediante entrevistas.',
        'Aprendí a realizar múltiples pruebas de usabilidad.'
      ],
      images: []
    }
  },
  {
    projectId: 2,
    link: [],
    title: 'Proceso de Créditos | Web',
    tools: ['React', 'Marvel', 'Figma', 'Looker Studio'],
    description:
      'Este proyecto buscaba desarrollar una plataforma intermediaria entre clientes y bancos en Panamá, simplificando y acelerando el proceso de acceso a productos financieros. La solución abordó la complejidad del sistema tradicional mediante una experiencia digital eficiente.',
    rol: [
      'Validación de la idea mediante entrevistas y análisis de mercado.',
      'Diseño de flujos y prototipos de baja y alta fidelidad.',
      'Desarrollo de algunas secciones de la plataforma.',
      'Implementación de tests para mejorar la experiencia del usuario.'
    ],
    problem: {
      description:
        'En Panamá, acceder a un crédito es un proceso complejo y lento, con múltiples formularios, largas filas, y gasto de tiempo en clientes que no aplican. Las entidades financieras enfrentaban dificultades para identificar clientes viables y optimizar su proceso de generación de leads.',
      pareto: []
    },
    understanding: {
      description:
        'La plataforma está diseñada para conectar usuarios (asalariados, independientes y PYMEs) con bancos y cooperativas, consolidando información bancaria en un solo lugar. Los usuarios pueden:',
      list: [
        'Comparar y aplicar a múltiples entidades.',
        'Recibir asesoría financiera y un perfil crediticio online.',
        'Reducir hasta un 60% del tiempo en procesos de análisis y pre-aprobaciones.'
      ],
      images: [
        '/assets/photos/CreditoUnderstand.png',
      ]
    },
    breacking: {
      description:
        'Métodos de investigación:',
      list: [
        'Encuestas (validación: 80% de los encuestados usarían la plataforma).',
        'Análisis de procesos bancarios tradicionales.',
        'Mapas de experiencia de usuario para identificar puntos críticos.',
      ],
      images: [
        '/assets/photos/CreditoBreacking.png',
        '/assets/photos/CreditoBreackingSecond.png'
      ]
    },
    overall: {
      description: 'Propuesta inicial:',
      list: [
        'Incremento del interés por la plataforma: el 80% de los encuestados la consideraron útil.',
        'Reducción esperada del tiempo de proceso en un 60%.',
        'Incremento en leads viables para entidades financieras.'
      ],
      images: ['/assets/photos/CreditoResults.png']
    },
    conclusions: {
      description: '',
      list: [
        'Desarrollé habilidades para estructurar validaciones tempranas de ideas de negocio.',
        'Aprendí a diseñar y testear prototipos de baja y alta fidelidad para plataformas complejas.',
        'Me enfoqué en diseñar flujos que respondieran a necesidades tanto de usuarios como de entidades financieras.'
      ],
      images: []
    }
  },
  {
    projectId: 3,
    link: ['https://www.figma.com/community/widget/1365813831823501864'],
    title: 'Figma Tracking Analytics | Widget',
    tools: ['TypeScript', 'Figma', 'Google Analytics'],
    description:
      'Como Product Designer con un background Fullstack, decidí contribuir a la comunidad de Figma al crear un widget que facilita la documentación y el seguimiento de etiquetas para Google Analitycs en los diseños trabajados en figma. Este widget busca mejorar la colaboración entre equipos de diseño y desarrollo, dejando claro dónde se deben asignar las etiquetas para Google Analytics ya que la medición precisa de datos es crucial para tomar decisiones informadas, y este widget simplifica el proceso de documentación.',
    rol: [
      'Identifiqué la necesidad de una herramienta que conectara de manera eficiente a diseñadores y desarrolladores en la asignación de etiquetas.',
      'Diseñé y desarrollé el widget en Figma utilizando TypeScript, garantizando una experiencia fluida para los usuarios',
      'Iteré el diseño del widget basándome en el feedback de usuarios de la comunidad de Figma.',
    ],
    problem: {
      description:
        'Los equipos de UX y desarrollo frecuentemente enfrentan desafíos en la documentación y ubicación precisa de etiquetas para herramientas como Google Analytics, lo que afecta la calidad del análisis de datos. Este widget soluciona el problema al:',
      pareto: [
        'Proveer una interfaz clara y accesible para asignar etiquetas directamente en los diseños.',
        'Establecer un puente entre diseñadores y desarrolladores, mejorando la comunicación y evitando malentendidos en la implementación.',
        'Facilitar la medición precisa de datos para decisiones estratégicas más efectivas.',
      ]
    },
    understanding: {
      description:
        'Los diseñadores suelen necesitar asignar etiquetas para rastrear interacciones clave en sus prototipos. Este widget permite:',
      list: [
        'Identificar de forma visual dónde deben ubicarse las etiquetas en los diseños.',
        'Documentar estas etiquetas para un fácil acceso y comprensión por parte del equipo de desarrollo.',
      ],
      images: [
        '/assets/photos/WidgetUnderstand.png',
      ]
    },
    breacking: {
      description:
        '',
      list: [
        'Realicé entrevistas con diseñadores y desarrolladores para identificar los puntos de fricción en la documentación de etiquetas.',
        'Analicé el flujo de trabajo en Figma para asegurar que la herramienta fuera intuitiva y no interfiriera en la creatividad del diseño.',
        'Diseñé iterativamente el widget, probándolo con miembros de la comunidad y ajustando según el feedback recibido.',
      ],
      images: [
        '/assets/photos/WidgetBreacking.png',
        '/assets/photos/WidgetBreackingSecond.png'
      ]
    },
    overall: {
      description: '',
      list: [
        'La herramienta permitió un proceso más organizado y eficiente para documentar y asignar etiquetas, reduciendo errores en la implementación.',
        'Se tiene mas de 1400 usuarios usando diariamente el widget.',
        'En mi equipo de trabajo se redujo en mas de un 90% las repreguntas o malos entendidos en las asignaciones de las etiquetas'
      ],
      images: ['/assets/photos/WidgetResults.png']
    },
    conclusions: {
      description: '',
      list: [
        'Aprendí a combinar habilidades de diseño y desarrollo para crear herramientas útiles y bien recibidas por la comunidad.',
        'Fortalecí mi capacidad de abordar problemas de comunicación entre equipos multidisciplinarios, aportando soluciones tangibles.',
        'Entendí la importancia de las herramientas visuales para mejorar la colaboración en proyectos de medición y análisis de datos.'
      ],
      images: []
    }
  }
];

export const DetailProjectsView = ({ currentTheme }) => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.projectId.toString() === projectId);
  const { tools } = project;

  const { primary, background } = currentTheme.palette;
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1

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
<<<<<<< HEAD
      {project.title}
    </Typography>
  ];

=======
      {title}
    </Typography>,
  ];

  const getLinkText = (link) => {
    if (link.includes('github')) {
      return 'Ver el reposotorio';
    }

    return 'Ver el proyecto';
  };

>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
<<<<<<< HEAD
        width: '100%'
=======
        width: '100%',
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
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
<<<<<<< HEAD
        {project.title}
=======
        {title}
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
      </Typography>

      <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
        {tools.map((tool, index) => (
          <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
        ))}
      </Stack>

<<<<<<< HEAD
      <Box>
        {project.link.map((link, index)=>(
          <Box key={index} style={{display:'flex', alignItems:'center', gap:'8px'}}>
            <div style={{display:'flex', alignItems: 'center', height: '22px', padding:'1px 8px', borderRadius: '6px', background: 'rgba(154, 230, 180, 0.16)'}}>
              <p style={{fontSize:'12px', color: '#9AE6B4', fontFamily: 'Inter', lineHeight: '20px'}}>Link</p>
            </div>
            <Linked  href={link} target='_blank' color={'#FF33BB'} fontSize='14px'>Clic para ver el Proyecto <LinkIcon color={'#FF33BB'} fontSize='14px'/></Linked> 
          </Box>
          
        ))}
      </Box>


=======
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

>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Descripción General
        </Typography>

        <Typography component='div'>
<<<<<<< HEAD
          {project.description.split('\n\n').map((paragraph, index) => (
=======
          {description.split('\n\n').map((paragraph, index) => (
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
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
<<<<<<< HEAD
            {/* {Object.values(project.rol).map((rol, index) => (
=======
            {/* {Object.values(rol).map((rol, index) => (
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={rol} />
              </ListItem>
            ))} */}

<<<<<<< HEAD
            {project.rol.map((rols, index) => (
=======
            {rol.map((rols, index) => (
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
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

<<<<<<< HEAD
      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Problematica y solución
        </Typography>

        <Typography component='div'>
          {project.problem.description}
          {'\n\n'}
          <List>
            {Object.values(project.problem.pareto).map(
              (functionalities, index) => (
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={functionalities} />
                </ListItem>
<<<<<<< HEAD
              )
            )}
          </List>
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Entendimiento
        </Typography>

        <Typography component='div'>
          {project.understanding.description}
          {'\n\n'}
          <List>
            {Object.values(project.understanding.list).map((pareto, index) => (
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
          {Object.values(project.understanding.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Desglosando el problema
        </Typography>

        <Typography component='div'>
          {project.breacking.description}
          {'\n\n'}
          <List>
            {Object.values(project.breacking.list).map((pareto, index) => (
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
          {Object.values(project.breacking.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Resultados generales
        </Typography>

        <Typography component='div'>
          {project.overall.description}
          {'\n\n'}
          <List>
            {Object.values(project.overall.list).map((pareto, index) => (
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
          {Object.values(project.overall.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Conclusiones
        </Typography>

        <Typography component='div'>
          {project.conclusions.description}
          {'\n\n'}
          <List>
            {Object.values(project.conclusions.list).map((pareto, index) => (
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
          {Object.values(project.conclusions.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>
=======
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
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
    </Container>
  );
};
