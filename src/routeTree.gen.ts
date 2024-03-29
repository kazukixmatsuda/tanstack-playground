// This file is auto-generated by TanStack Router

import { FileRoute, lazyRouteComponent } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AboutComponentImport = new FileRoute('/about').createRoute()
const IndexComponentImport = new FileRoute('/').createRoute()

// Create/Update Routes

const AboutComponentRoute = AboutComponentImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/about.component'),
    'component',
  ),
})

const IndexComponentRoute = IndexComponentImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index.component'),
    'component',
  ),
})

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexComponentImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutComponentImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexComponentRoute,
  AboutComponentRoute,
])
