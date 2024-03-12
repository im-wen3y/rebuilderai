import LayoutPage from '@pages/layout/LayoutPage';
import ServicePage from '@pages/service/ServicePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { path: '/', element: <ServicePage /> },
      { path: '/service', element: <ServicePage /> },
    ],
  },
]);

export default router;
