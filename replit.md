# Catalyst CMS Frontend

## Overview

Catalyst CMS Frontend is a Vue 3-based content management system admin panel built with TypeScript. The project provides a professional, enterprise-grade CMS admin interface similar to Strapi, Directus, or Sanity Studio. Currently, it's a UI-only implementation with mocked/static data, designed for maximum component reusability and future API integration readiness.

The application serves as both a public-facing website (home, about, team, services, pricing pages) and an admin panel for content management, user administration, and system configuration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Vue 3 with Composition API**: Chosen for its reactive system, better TypeScript integration, and improved code organization through composables
- **TypeScript (strict mode)**: Provides type safety across the codebase, with dedicated type definitions in `src/types/`
- **Vite**: Modern build tool offering fast HMR and optimized production builds

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for consistent, maintainable styling
- **No external UI component libraries**: Custom components built from scratch for maximum control and consistency (no Vuetify, Element, or Ant Design)
- **SASS support**: Available for more complex styling needs

### State Management
- **Pinia**: Official Vue state management with stores in `src/stores/`
- Currently includes `admin.ts` (sidebar state, theme, current user) and `counter.ts` (example store)
- Designed as placeholders ready for API integration

### Routing
- **Vue Router**: File-based route organization with lazy-loaded components
- Public routes: home, about, team, services, pricing, blog, career, contact
- Admin routes: dashboard, users, roles, permissions, content management
- Route meta includes page titles

### Project Structure
```
src/
├── assets/          # Static assets and base CSS
├── components/      # Reusable Vue components
├── config/          # Site configuration
├── data/            # Mock data and menu definitions
├── router/          # Vue Router configuration
├── stores/          # Pinia stores
├── styles/          # Tailwind CSS entry point
├── types/           # TypeScript type definitions
└── views/           # Page components
```

### Testing Strategy
- **Unit Tests**: Vitest with jsdom environment, Vue Test Utils
- **E2E Tests**: Playwright configured for Chromium, Firefox, and WebKit
- Test files located in `src/**/__tests__/` and `e2e/`

### Code Quality
- **ESLint**: Vue-specific linting with TypeScript support
- **Prettier**: Code formatting with single quotes, no semicolons, 100 char width
- **Husky + lint-staged**: Pre-commit hooks for automated linting

### Admin Panel Architecture
- **AdminLayout**: Collapsible sidebar, topbar with user menu, responsive design
- **Menu System**: Grouped menu items with icons and permission-based visibility
- **Type-safe Components**: Interfaces for MenuItem, MenuGroup, TableColumn, PaginationInfo defined in `src/types/admin.ts`

## External Dependencies

### Core Dependencies
- **Vue 3.5+**: Frontend framework
- **Vue Router 4.6+**: Client-side routing
- **Pinia 3.0+**: State management
- **Axios 1.13+**: HTTP client (prepared for future API integration)

### Form Handling
- **VeeValidate 4.15+**: Form validation library
- **@vee-validate/zod**: Zod schema integration for validation
- **Zod 4.1+**: TypeScript-first schema validation

### UI Components
- **Lucide Vue Next**: Icon library providing consistent iconography
- **Swiper 12+**: Touch slider for carousels/galleries

### Development Tools
- **Vite**: Build tool and dev server (port 5000)
- **vite-plugin-vue-devtools**: Enhanced Vue debugging
- **Storybook**: Component documentation and development

### Testing
- **Vitest**: Unit testing framework
- **@testing-library/vue**: Component testing utilities
- **Playwright**: End-to-end testing

### Build Requirements
- **Node.js**: ^20.19.0 or >=22.12.0
- **Package Manager**: pnpm (recommended), npm supported