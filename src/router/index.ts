import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Home | CMS',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About | CMS',
      },
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/TeamView.vue'),
      meta: {
        title: 'Member | CMS',
      },
    },
    {
      path: '/team/:slug',
      name: 'team-member',
      component: () => import('@/views/TeamMemberView.vue'),
      meta: {
        title: 'Member | CMS',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServiceView.vue'),
      meta: {
        title: 'Services | CMS',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue'),
      meta: {
        title: 'Pricing | CMS',
      },
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/CareerView.vue'),
      meta: {
        title: 'Career | CMS',
      },
    },
    {
      path: '/why-cits',
      name: 'why-cits',
      component: () => import('@/views/WhyCITSView.vue'),
      meta: {
        title: 'Why CITS | CMS',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact | CMS',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        title: 'Privacy Policy | CMS',
      },
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/TermsOfServiceView.vue'),
      meta: {
        title: 'Terms of Service | CMS',
      },
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          redirect: '/admin/dashboard',
        },
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('@/views/admin/AdminDashboard.vue'),
          meta: {
            title: 'Dashboard',
            permission: 'dashboard.view',
          },
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersListView.vue'),
          meta: {
            title: 'Users',
            permission: 'users.view',
          },
        },
        {
          path: 'users/create',
          name: 'admin-users-create',
          component: () => import('@/views/admin/UserFormView.vue'),
          meta: {
            title: 'Create User',
            permission: 'users.create',
          },
        },
        {
          path: 'users/:id/edit',
          name: 'admin-users-edit',
          component: () => import('@/views/admin/UserFormView.vue'),
          meta: {
            title: 'Edit User',
            permission: 'users.edit',
          },
        },
        {
          path: 'roles',
          name: 'admin-roles',
          component: () => import('@/views/admin/RolesListView.vue'),
          meta: {
            title: 'Roles',
            permission: 'roles.view',
          },
        },
        {
          path: 'permissions',
          name: 'admin-permissions',
          component: () => import('@/views/admin/PermissionsView.vue'),
          meta: {
            title: 'Permissions',
            permission: 'permissions.view',
          },
        },
        {
          path: 'content/pages',
          name: 'admin-pages',
          component: () => import('@/views/admin/PagesListView.vue'),
          meta: {
            title: 'Pages',
            permission: 'pages.view',
          },
        },
        {
          path: 'content/posts',
          name: 'admin-posts',
          component: () => import('@/views/admin/PostsListView.vue'),
          meta: {
            title: 'Posts',
            permission: 'posts.view',
          },
        },
        {
          path: 'content/posts/create',
          name: 'admin-posts-create',
          component: () => import('@/views/admin/UserFormView.vue'),
          meta: {
            title: 'Create Post',
            permission: 'posts.create',
          },
        },
        {
          path: 'content/posts/:id/edit',
          name: 'admin-posts-edit',
          component: () => import('@/views/admin/UserFormView.vue'),
          meta: {
            title: 'Edit Post',
            permission: 'posts.edit',
          },
        },
        {
          path: 'content/categories',
          name: 'admin-categories',
          component: () => import('@/views/admin/CategoriesListView.vue'),
          meta: {
            title: 'Categories',
            permission: 'categories.view',
          },
        },
        {
          path: 'media',
          name: 'admin-media',
          component: () => import('@/views/admin/MediaLibraryView.vue'),
          meta: {
            title: 'Media Library',
            permission: 'media.view',
          },
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'Settings',
            permission: 'settings.view',
          },
        },
        {
          path: 'settings/general',
          name: 'admin-settings-general',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'General Settings',
            permission: 'settings.general',
          },
        },
        {
          path: 'settings/appearance',
          name: 'admin-settings-appearance',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'Appearance Settings',
            permission: 'settings.appearance',
          },
        },
        {
          path: 'settings/security',
          name: 'admin-settings-security',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'Security Settings',
            permission: 'settings.security',
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      props: (route) => ({
        path: route.fullPath,
      }),
      meta: {
        title: '404 – Page Not Found',
      },
    },
  ],
})

router.beforeEach((to) => {
  const defaultTitle = 'CMS'
  document.title = (to.meta.title as string) || defaultTitle
})

export default router
