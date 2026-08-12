import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'projects/ng-simple-sidebar-showcase/e2e/**/*.cy.{ts,js}',
    supportFile: 'projects/ng-simple-sidebar-showcase/e2e/support/e2e.ts',
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'projects/**/*.cy.{ts,js}',
  },
});