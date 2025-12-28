import type { MenuGroup } from '@/types/admin'

export const adminMenuGroups: MenuGroup[] = [
  {
    title: 'Main',
    items: [
      {
        label: 'Dashboard',
        icon: 'LayoutDashboard',
        to: '/admin/dashboard',
        permission: 'dashboard.view'
      }
    ]
  },
  {
    title: 'User Management',
    items: [
      {
        label: 'Users',
        icon: 'Users',
        to: '/admin/users',
        permission: 'users.view'
      },
      {
        label: 'Roles',
        icon: 'Shield',
        to: '/admin/roles',
        permission: 'roles.view'
      },
      {
        label: 'Permissions',
        icon: 'Key',
        to: '/admin/permissions',
        permission: 'permissions.view'
      }
    ]
  },
  {
    title: 'Content',
    items: [
      {
        label: 'Pages',
        icon: 'FileText',
        to: '/admin/content/pages',
        permission: 'pages.view'
      },
      {
        label: 'Posts',
        icon: 'Newspaper',
        to: '/admin/content/posts',
        permission: 'posts.view'
      },
      {
        label: 'Categories',
        icon: 'FolderTree',
        to: '/admin/content/categories',
        permission: 'categories.view'
      }
    ]
  },
  {
    title: 'Assets',
    items: [
      {
        label: 'Media Library',
        icon: 'Image',
        to: '/admin/media',
        permission: 'media.view'
      }
    ]
  },
  {
    title: 'System',
    items: [
      {
        label: 'Settings',
        icon: 'Settings',
        to: '/admin/settings',
        permission: 'settings.view',
        children: [
          {
            label: 'General',
            icon: 'Sliders',
            to: '/admin/settings/general',
            permission: 'settings.general'
          },
          {
            label: 'Appearance',
            icon: 'Palette',
            to: '/admin/settings/appearance',
            permission: 'settings.appearance'
          },
          {
            label: 'Security',
            icon: 'Lock',
            to: '/admin/settings/security',
            permission: 'settings.security'
          }
        ]
      }
    ]
  }
]
