export interface MockUser {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  createdAt: string
  avatar: string
}

export interface MockPost {
  id: string
  title: string
  author: string
  status: 'draft' | 'published' | 'archived'
  category: string
  createdAt: string
  updatedAt: string
}

export interface MockPage {
  id: string
  title: string
  slug: string
  status: 'draft' | 'published'
  author: string
  updatedAt: string
}

export interface MockCategory {
  id: string
  name: string
  slug: string
  postCount: number
  createdAt: string
}

export interface DashboardStat {
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
  icon: string
}

export interface ActivityItem {
  id: string
  action: string
  user: string
  target: string
  timestamp: string
  type: 'create' | 'update' | 'delete' | 'login'
}

export const mockUsers: MockUser[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', createdAt: '2024-01-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', createdAt: '2024-02-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'Author', status: 'inactive', createdAt: '2024-03-10', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'active', createdAt: '2024-03-22', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice' },
  { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Author', status: 'pending', createdAt: '2024-04-05', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=charlie' },
  { id: '6', name: 'Diana Evans', email: 'diana@example.com', role: 'Viewer', status: 'active', createdAt: '2024-04-18', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=diana' },
  { id: '7', name: 'Edward Foster', email: 'edward@example.com', role: 'Author', status: 'active', createdAt: '2024-05-02', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=edward' },
  { id: '8', name: 'Fiona Garcia', email: 'fiona@example.com', role: 'Editor', status: 'inactive', createdAt: '2024-05-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fiona' },
]

export const mockPosts: MockPost[] = [
  { id: '1', title: 'Getting Started with Vue 3', author: 'John Doe', status: 'published', category: 'Tutorial', createdAt: '2024-06-01', updatedAt: '2024-06-10' },
  { id: '2', title: 'Advanced TypeScript Patterns', author: 'Jane Smith', status: 'published', category: 'Development', createdAt: '2024-06-05', updatedAt: '2024-06-08' },
  { id: '3', title: 'Building a CMS from Scratch', author: 'Bob Wilson', status: 'draft', category: 'Tutorial', createdAt: '2024-06-10', updatedAt: '2024-06-12' },
  { id: '4', title: 'Best Practices for API Design', author: 'Alice Brown', status: 'published', category: 'Development', createdAt: '2024-06-12', updatedAt: '2024-06-14' },
  { id: '5', title: 'Introduction to Tailwind CSS', author: 'Charlie Davis', status: 'archived', category: 'Design', createdAt: '2024-05-20', updatedAt: '2024-05-25' },
  { id: '6', title: 'State Management with Pinia', author: 'Diana Evans', status: 'draft', category: 'Tutorial', createdAt: '2024-06-15', updatedAt: '2024-06-15' },
]

export const mockPages: MockPage[] = [
  { id: '1', title: 'Home', slug: '/', status: 'published', author: 'Admin', updatedAt: '2024-06-01' },
  { id: '2', title: 'About Us', slug: '/about', status: 'published', author: 'Admin', updatedAt: '2024-05-15' },
  { id: '3', title: 'Services', slug: '/services', status: 'published', author: 'John Doe', updatedAt: '2024-06-10' },
  { id: '4', title: 'Contact', slug: '/contact', status: 'published', author: 'Admin', updatedAt: '2024-04-20' },
  { id: '5', title: 'Privacy Policy', slug: '/privacy', status: 'draft', author: 'Jane Smith', updatedAt: '2024-06-14' },
]

export const mockCategories: MockCategory[] = [
  { id: '1', name: 'Tutorial', slug: 'tutorial', postCount: 12, createdAt: '2024-01-01' },
  { id: '2', name: 'Development', slug: 'development', postCount: 8, createdAt: '2024-01-15' },
  { id: '3', name: 'Design', slug: 'design', postCount: 5, createdAt: '2024-02-01' },
  { id: '4', name: 'News', slug: 'news', postCount: 15, createdAt: '2024-02-20' },
  { id: '5', name: 'Updates', slug: 'updates', postCount: 3, createdAt: '2024-03-10' },
]

export const dashboardStats: DashboardStat[] = [
  { label: 'Total Users', value: '2,847', change: '+12.5%', trend: 'up', icon: 'Users' },
  { label: 'Total Posts', value: '1,234', change: '+8.2%', trend: 'up', icon: 'FileText' },
  { label: 'Page Views', value: '45.2K', change: '-3.1%', trend: 'down', icon: 'Eye' },
  { label: 'Active Sessions', value: '342', change: '+5.4%', trend: 'up', icon: 'Activity' },
]

export const recentActivity: ActivityItem[] = [
  { id: '1', action: 'Created', user: 'John Doe', target: 'New blog post', timestamp: '5 minutes ago', type: 'create' },
  { id: '2', action: 'Updated', user: 'Jane Smith', target: 'Homepage content', timestamp: '15 minutes ago', type: 'update' },
  { id: '3', action: 'Deleted', user: 'Admin', target: 'Old category', timestamp: '1 hour ago', type: 'delete' },
  { id: '4', action: 'Logged in', user: 'Bob Wilson', target: 'Admin panel', timestamp: '2 hours ago', type: 'login' },
  { id: '5', action: 'Created', user: 'Alice Brown', target: 'New user account', timestamp: '3 hours ago', type: 'create' },
  { id: '6', action: 'Updated', user: 'Charlie Davis', target: 'Settings', timestamp: '5 hours ago', type: 'update' },
]
