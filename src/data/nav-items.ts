export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    title: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 2,
    path: 'user',
    title: 'User',
    icon: 'clarity:user-line',
    active: false,
  },
  {
    id: 3,
    path: 'customer',
    title: 'Customer',
    icon: 'material-symbols-light:leaderboard-outline',
    active: false,
  },
  {
    id: 4,
    path: 'order',
    title: 'Order',
    icon: 'ant-design:shopping-cart-outlined',
    active: false,
  },
  {
    id: 5,
    path: 'product',
    title: 'Product',
    icon: 'lets-icons:bag-alt-light',
    active: false,
  },
  {
    id: 6,
    path: 'sales-report',
    title: 'Sales Report',
    icon: 'lucide:line-chart',
    active: false,
  },
  {
    id: 7,
    path: 'message',
    title: 'Message',
    icon: 'bi:chat',
    active: false,
  },
  {
    id: 8,
    path: 'setting',
    title: 'Settings',
    icon: 'mingcute:settings-3-line',
    active: false,
  },
  // {
  //   id: 9,
  //   path: '#!',
  //   title: 'Favourite',
  //   icon: 'clarity:favorite-line',
  //   active: false,
  // },
  // {
  //   id: 10,
  //   path: '#!',
  //   title: 'History',
  //   icon: 'ic:round-history',
  //   active: false,
  // },
  {
    id: 11,
    path: 'authentication/login',
    title: 'Login',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 12,
    path: 'authentication/sign-up',
    title: 'Sign Up',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
