import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import { CareersPage } from './pages/Careers';
import { ChildCarePage } from './pages/ChildCare';
import { NotFoundPage } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: NotFoundPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'services',
        Component: ServicesPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
      {
        path: 'careers',
        Component: CareersPage,
      },
      {
        path: 'child-care',
        Component: ChildCarePage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
