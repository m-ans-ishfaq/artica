import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import nft from './NFTs';

export const schemaTypes = [post, blockContent, nft]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, nft],
}
