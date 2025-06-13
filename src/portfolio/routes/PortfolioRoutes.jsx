import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { DetailProjectsView, HomeView, ProjectsView } from '../views';

export const PortfolioRoutes = ({ toggleTheme, currentTheme }) => {

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
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
