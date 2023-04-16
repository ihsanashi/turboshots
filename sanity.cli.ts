// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: "2ciw864r",
    dataset: "production"
  },
  graphql: [
    {
      playground: true,
      tag: 'default',
    },
  ],
})
