import PAGES from '@configs/pages'

const routes: Route[] = [
  {
    component: <PAGES.Dashboard />,
    name: 'Dashboard',
    path: '/',
    requireAuth: true,
  },
  {
    component: <PAGES.DetailOrder />,
    name: 'Detail Order',
    path: '/order/:id',
    requireAuth: true,
  },
  {
    component: <PAGES.Login />,
    name: 'Login',
    path: '/login',
  },
  {
    component: <PAGES.NotFound />,
    name: 'Not Found',
    path: '*',
  },
]

// exports
export { routes }
