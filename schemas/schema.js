import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import igPhoto from './igPhoto'
import igVideo from './igVideo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([igPhoto, igVideo]),
})
