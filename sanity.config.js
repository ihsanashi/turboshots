import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  title: 'shots',
  projectId: '2ciw864r',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
