import { defineConfig } from 'sanity';
import { schemas } from './schemas/schema';

export const config = defineConfig({
  title: 'Shots | Studio',
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  apiVersion: '2023-19-08',
  basePath: '/studio',
  schema: {
    types: schemas,
  },
});
