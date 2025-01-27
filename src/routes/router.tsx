import { lazy, Suspense, ReactElement, PropsWithChildren } from 'react';
import {
  Outlet,
  RouteObject,
  RouterProps,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import { rootPaths } from './paths';
import paths from './paths';
import Users from 'pages/user/user';
import Customer from 'pages/customer/Customer';
import Orders from 'pages/order/Order';
import Products from 'pages/product/Products';

const App = lazy<() => ReactElement>(() => import('App'));

const MainLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/main-layout'),
);
const AuthLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/auth-layout'),
);

const Dashboard = lazy<() => ReactElement>(() => import('pages/dashboard/Dashboard'));
const Login = lazy<() => ReactElement>(() => import('pages/authentication/Login'));
const SignUp = lazy<() => ReactElement>(() => import('pages/authentication/SignUp'));
const ErrorPage = lazy<() => ReactElement>(() => import('pages/error/ErrorPage'));

// Mock authentication check function
const isAuthenticated = (): boolean => {
  // Replace this with real authentication logic
  // return localStorage.getItem('authToken') !== null;
  return true 
};

// Route definitions
const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },
      {
        path: paths.home,
        element: isAuthenticated() ? (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ) : (
          <Navigate to={paths.login} replace />
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: paths.user,
            element: <Users />,
          },
          {
            path: paths.customer,
            element: <Customer />,
          },
          {
            path: paths.order,
            element: <Orders />,
          },
          {
            path: paths.product,
            element: <Products />,
          },
          {
            path: paths.salesReport,
            element: <h1>Sales Report Route</h1>,
          },
          {
            path: paths.message,
            element: <h1>Message Route</h1>,
          },
          {
            path: paths.setting,
            element: <h1>Setting Route</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const options: { basename: string } = {
  basename: '/cosmetico',
};

const router: Partial<RouterProps> = createBrowserRouter(routes, options);

export default router;
