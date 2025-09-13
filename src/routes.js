// Route configuration
export const routes = [
  { path: '/', component: 'Home' },
  { path: '/blogs', component: 'BlogList' },
  { path: '/blogs/:id', component: 'BlogDetails' },
  { path: '/create', component: 'CreateBlog' },
  { path: '/edit/:id', component: 'EditBlog' },
  { path: '/login', component: 'Login' },
];
