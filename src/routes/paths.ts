export const rootPaths = {
  homeRoot: '/',
  userRoot: 'user',
  customerRoot: 'customer',
  orderRoot: 'order',
  productRoot: 'product',
  salesReportRoot: 'sales-report',
  messageRoot: 'message',
  settingRoot: 'setting',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  user: `/${rootPaths.userRoot}`,
  customer: `/${rootPaths.customerRoot}`,
  order: `/${rootPaths.orderRoot}`,
  product: `/${rootPaths.productRoot}`,
  salesReport: `/${rootPaths.salesReportRoot}`,
  message: `/${rootPaths.messageRoot}`,
  setting: `/${rootPaths.settingRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  404: `/${rootPaths.errorRoot}/404`,
};
