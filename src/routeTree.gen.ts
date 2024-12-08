/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const SignupLazyImport = createFileRoute('/signup')()
const LoginLazyImport = createFileRoute('/login')()
const AuthenticatedProfileLazyImport = createFileRoute(
  '/_authenticated/profile',
)()
const AuthenticatedPagesLazyImport = createFileRoute('/_authenticated/pages')()
const AuthenticatedMermaidLazyImport = createFileRoute(
  '/_authenticated/mermaid',
)()
const AuthenticatedPageIdLazyImport = createFileRoute(
  '/_authenticated/page/$id',
)()

// Create/Update Routes

const SignupLazyRoute = SignupLazyImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedProfileLazyRoute = AuthenticatedProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/profile.lazy').then((d) => d.Route),
)

const AuthenticatedPagesLazyRoute = AuthenticatedPagesLazyImport.update({
  id: '/pages',
  path: '/pages',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/pages.lazy').then((d) => d.Route),
)

const AuthenticatedMermaidLazyRoute = AuthenticatedMermaidLazyImport.update({
  id: '/mermaid',
  path: '/mermaid',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/mermaid.lazy').then((d) => d.Route),
)

const AuthenticatedPageIdLazyRoute = AuthenticatedPageIdLazyImport.update({
  id: '/page/$id',
  path: '/page/$id',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/page.$id.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupLazyImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/mermaid': {
      id: '/_authenticated/mermaid'
      path: '/mermaid'
      fullPath: '/mermaid'
      preLoaderRoute: typeof AuthenticatedMermaidLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/pages': {
      id: '/_authenticated/pages'
      path: '/pages'
      fullPath: '/pages'
      preLoaderRoute: typeof AuthenticatedPagesLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/page/$id': {
      id: '/_authenticated/page/$id'
      path: '/page/$id'
      fullPath: '/page/$id'
      preLoaderRoute: typeof AuthenticatedPageIdLazyImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedMermaidLazyRoute: typeof AuthenticatedMermaidLazyRoute
  AuthenticatedPagesLazyRoute: typeof AuthenticatedPagesLazyRoute
  AuthenticatedProfileLazyRoute: typeof AuthenticatedProfileLazyRoute
  AuthenticatedPageIdLazyRoute: typeof AuthenticatedPageIdLazyRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedMermaidLazyRoute: AuthenticatedMermaidLazyRoute,
  AuthenticatedPagesLazyRoute: AuthenticatedPagesLazyRoute,
  AuthenticatedProfileLazyRoute: AuthenticatedProfileLazyRoute,
  AuthenticatedPageIdLazyRoute: AuthenticatedPageIdLazyRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/signup': typeof SignupLazyRoute
  '/mermaid': typeof AuthenticatedMermaidLazyRoute
  '/pages': typeof AuthenticatedPagesLazyRoute
  '/profile': typeof AuthenticatedProfileLazyRoute
  '/page/$id': typeof AuthenticatedPageIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/signup': typeof SignupLazyRoute
  '/mermaid': typeof AuthenticatedMermaidLazyRoute
  '/pages': typeof AuthenticatedPagesLazyRoute
  '/profile': typeof AuthenticatedProfileLazyRoute
  '/page/$id': typeof AuthenticatedPageIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginLazyRoute
  '/signup': typeof SignupLazyRoute
  '/_authenticated/mermaid': typeof AuthenticatedMermaidLazyRoute
  '/_authenticated/pages': typeof AuthenticatedPagesLazyRoute
  '/_authenticated/profile': typeof AuthenticatedProfileLazyRoute
  '/_authenticated/page/$id': typeof AuthenticatedPageIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/signup'
    | '/mermaid'
    | '/pages'
    | '/profile'
    | '/page/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/signup'
    | '/mermaid'
    | '/pages'
    | '/profile'
    | '/page/$id'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/login'
    | '/signup'
    | '/_authenticated/mermaid'
    | '/_authenticated/pages'
    | '/_authenticated/profile'
    | '/_authenticated/page/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LoginLazyRoute: typeof LoginLazyRoute
  SignupLazyRoute: typeof SignupLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LoginLazyRoute: LoginLazyRoute,
  SignupLazyRoute: SignupLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/login",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/mermaid",
        "/_authenticated/pages",
        "/_authenticated/profile",
        "/_authenticated/page/$id"
      ]
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/signup": {
      "filePath": "signup.lazy.tsx"
    },
    "/_authenticated/mermaid": {
      "filePath": "_authenticated/mermaid.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/pages": {
      "filePath": "_authenticated/pages.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/page/$id": {
      "filePath": "_authenticated/page.$id.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
