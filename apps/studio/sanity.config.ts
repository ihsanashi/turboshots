import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema.js';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  title: 'Shots | Studio',
  projectId: '2ciw864r',
  dataset: 'production',
  apiVersion: '2023-19-08',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});

export default config;
