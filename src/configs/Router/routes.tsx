import { type TypeRouter } from './router.types';

import paths from './paths';

import { Home, Ratings, Quests, Boost, Ref, Faq } from '@pages';

const routes: TypeRouter[] = [
  {
    path: paths.Home,
    element: <Home />,
    title: 'Home',
  },

  {
    path: paths.Ratings,
    element: <Ratings />,
    title: 'Ratings',
  },

  {
    path: paths.Quests,
    element: <Quests />,
    title: 'Quests',
  },

  {
    path: paths.Home,
    element: <Home />,
    title: 'Home',
  },

  {
    path: paths.Boost,
    element: <Boost />,
    title: 'Boost',
  },

  {
    path: paths.Ref,
    element: <Ref />,
    title: 'Ref',
  },

  {
    path: paths.Faq,
    element: <Faq />,
    title: 'Faq',
  },
];

export default routes;
