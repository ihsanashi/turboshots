import { defineConfig } from 'sanity';
import { schemas } from './schemas/schema';

export const config = defineConfig({
  title: 'Shots | Studio',
  projectId: '2ciw864r',
  dataset: 'production',
  apiVersion: '2023-19-08',
  basePath: '/studio',
  schema: {
    types: schemas,
  },
});
