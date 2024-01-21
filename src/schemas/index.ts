import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import nft from './NFTs'
import post from './post'

export const schemaTypes = [post, blockContent, nft]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, nft],
}
