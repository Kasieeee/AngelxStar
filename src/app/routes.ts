import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import { CareersPage } from './pages/Careers';
import { ChildCarePage } from './pages/ChildCare';
import { AboutChildrenPage } from './pages/children/About';
import { ChildrenResidentialPage } from './pages/children/Residential';
import { ChildrenContactPage } from './pages/children/Contact';
import { ShortBreaksPage } from './pages/children/ShortBreaks';
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
        path: 'child-care/about',
        Component: AboutChildrenPage,
      },
      {
        path: 'child-care/residential',
        Component: ChildrenResidentialPage,
      },
      {
        path: 'child-care/short-breaks',
        Component: ShortBreaksPage,
      },
      {
        path: 'child-care/contact',
        Component: ChildrenContactPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });
