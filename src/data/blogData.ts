export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
    bio: string
  }
  date: string
  readTime: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'future-of-web-development-2025',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to new frameworks.',
    content: `
      <p>The web development landscape is evolving rapidly, with new technologies and methodologies emerging every year. As we look ahead to 2025 and beyond, several key trends are shaping how we build and deploy web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing the way developers write code. From intelligent code completion to automated testing and debugging, AI tools are making developers more productive than ever before.</p>
      
      <h2>Edge Computing and Performance</h2>
      <p>With users demanding faster experiences, edge computing is becoming increasingly important. By processing data closer to users, we can significantly reduce latency and improve application performance.</p>
      
      <h2>Web Components and Micro-Frontends</h2>
      <p>The shift towards modular, reusable components continues to gain momentum. Web Components and micro-frontend architectures allow teams to build scalable applications with independent deployment cycles.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying current with these trends, developers can build faster, more efficient, and more user-friendly applications.</p>
    `,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Trends', 'Frontend'],
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Senior Developer',
      bio: 'Sarah is a senior developer with over 10 years of experience in web technologies.'
    },
    date: 'Dec 25, 2025',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 2,
    slug: 'mastering-vue-composition-api',
    title: 'Mastering Vue 3 Composition API',
    excerpt: 'A comprehensive guide to understanding and implementing the Composition API in your Vue 3 projects.',
    content: `
      <p>The Composition API is one of the most significant additions to Vue 3. It provides a more flexible and powerful way to organize component logic.</p>
      
      <h2>Why Composition API?</h2>
      <p>The Options API served Vue developers well, but as applications grew larger, organizing related logic became challenging. The Composition API solves this by allowing you to group related logic together.</p>
      
      <h2>Key Concepts</h2>
      <p>Understanding ref, reactive, computed, and watch is essential for working with the Composition API effectively.</p>
      
      <h2>Best Practices</h2>
      <p>Learn how to structure your composables for maximum reusability and maintainability.</p>
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    category: 'Tutorial',
    tags: ['Vue.js', 'JavaScript', 'Frontend', 'Tutorial'],
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      role: 'Frontend Architect',
      bio: 'Michael specializes in Vue.js and modern JavaScript frameworks.'
    },
    date: 'Dec 22, 2025',
    readTime: '8 min read'
  },
  {
    id: 3,
    slug: 'building-scalable-apis',
    title: 'Building Scalable REST APIs',
    excerpt: 'Learn the best practices for designing and building APIs that can handle millions of requests.',
    content: `
      <p>Building APIs that scale is both an art and a science. This guide covers the essential patterns and practices for building robust, scalable REST APIs.</p>
      
      <h2>API Design Principles</h2>
      <p>Good API design starts with clear, consistent, and intuitive endpoints. Following REST conventions makes your API easier to understand and use.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implementing effective caching can dramatically improve API performance and reduce server load.</p>
      
      <h2>Rate Limiting and Security</h2>
      <p>Protecting your API from abuse while ensuring legitimate users have a smooth experience.</p>
    `,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    category: 'Backend',
    tags: ['API', 'Backend', 'Node.js', 'Architecture'],
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      role: 'Backend Engineer',
      bio: 'Emily has built APIs serving millions of users at scale.'
    },
    date: 'Dec 20, 2025',
    readTime: '6 min read'
  },
  {
    id: 4,
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS Best Practices for 2025',
    excerpt: 'Discover how to write clean, maintainable Tailwind CSS and avoid common pitfalls.',
    content: `
      <p>Tailwind CSS has transformed how we style web applications. Here are the best practices to follow in 2025.</p>
      
      <h2>Component Extraction</h2>
      <p>Know when to extract components vs using utility classes directly.</p>
      
      <h2>Custom Configuration</h2>
      <p>Tailoring Tailwind to your design system for consistency across your application.</p>
      
      <h2>Performance Optimization</h2>
      <p>Keeping your CSS bundle size small with proper purging and optimization.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop',
    category: 'Design',
    tags: ['CSS', 'Tailwind', 'Design', 'Frontend'],
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      role: 'UI Developer',
      bio: 'David focuses on creating beautiful, accessible user interfaces.'
    },
    date: 'Dec 18, 2025',
    readTime: '4 min read'
  },
  {
    id: 5,
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns You Should Know',
    excerpt: 'Take your TypeScript skills to the next level with these advanced patterns and techniques.',
    content: `
      <p>TypeScript offers powerful features beyond basic typing. Master these advanced patterns to write more robust code.</p>
      
      <h2>Generic Constraints</h2>
      <p>Learn how to use generic constraints effectively for type-safe, reusable code.</p>
      
      <h2>Conditional Types</h2>
      <p>Understanding conditional types opens up powerful type manipulation possibilities.</p>
      
      <h2>Template Literal Types</h2>
      <p>Create precise string types using template literal types.</p>
    `,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    category: 'Tutorial',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Senior Developer',
      bio: 'Sarah is a senior developer with over 10 years of experience in web technologies.'
    },
    date: 'Dec 15, 2025',
    readTime: '7 min read'
  },
  {
    id: 6,
    slug: 'devops-for-frontend-developers',
    title: 'DevOps Essentials for Frontend Developers',
    excerpt: 'Understanding CI/CD, containerization, and deployment strategies as a frontend developer.',
    content: `
      <p>Modern frontend development extends beyond just writing code. Understanding DevOps practices is essential.</p>
      
      <h2>Continuous Integration</h2>
      <p>Setting up automated testing and quality checks for your frontend projects.</p>
      
      <h2>Containerization Basics</h2>
      <p>Understanding Docker and how it applies to frontend development.</p>
      
      <h2>Deployment Strategies</h2>
      <p>From blue-green deployments to canary releases, choose the right strategy for your needs.</p>
    `,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    category: 'DevOps',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Deployment'],
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'DevOps Engineer',
      bio: 'Alex bridges the gap between development and operations.'
    },
    date: 'Dec 12, 2025',
    readTime: '6 min read'
  }
]

export const categories = [
  'All',
  'Technology',
  'Tutorial',
  'Backend',
  'Design',
  'DevOps'
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogBySlug(currentSlug)
  if (!current) return blogPosts.slice(0, limit)
  
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === current.category)
    .slice(0, limit)
}
