import { createClient } from 'contentful';
import { CONFIG } from './config.js';

const client = createClient({
  space: CONFIG.space, // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: CONFIG.accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit ? limit : 99,
    include: 3
  });
  return entries;
}

export function fetchContentfulAsset(id) {
  const asset = client.getAsset(id);
  return asset;
}