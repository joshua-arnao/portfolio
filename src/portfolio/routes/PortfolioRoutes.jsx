<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
=======
import { Navigate, Route, Routes } from 'react-router-dom';
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { DetailProjectsView, HomeView, ProjectsView } from '../views';

export const PortfolioRoutes = ({ toggleTheme, currentTheme }) => {
<<<<<<< HEAD
  // const routes = [
  //   {
  //     path: '/',
  //     Component: PortfolioLayout,

  //     children: [
  //       {
  //         path: '/',
  //         Component: HomeView
  //       },
  //       {
  //         path: 'projects',
  //         Component: ProjectsView
  //         // children: [
  //         //   {
  //         //     path: 'projects/:projectId',
  //         //     Component: DetailProjectsView
  //         //   }
  //         // ]
  //       },
  //       {
  //         path: 'projects/:projectId',
  //         Component: DetailProjectsView
  //       }
  //     ]
  //   }
  // ];

  // const routeElement = useRoutes(routes);

  return (
    <Routes>
=======

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
      <Route
        path='/'
        element={
          <PortfolioLayout
            toggleTheme={toggleTheme}
            currentTheme={currentTheme}
          />
        }
      >
        <Route path='/' element={<HomeView currentTheme={currentTheme} />} />
        <Route
          path='projects'
          element={<ProjectsView currentTheme={currentTheme} />}
        />
        <Route
          path='projects/:projectId'
          element={<DetailProjectsView currentTheme={currentTheme} />}
        />
      </Route>
    </Routes>
    // routeElement
  );
};
