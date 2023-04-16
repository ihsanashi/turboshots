// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  graphql: [
    {
      playground: false,
      tag: 'experiment',
      workspace: 'staging',
      id: 'schema-experiment',
    },
  ],
})
