import { createClient } from 'contentful';

const CONFIG = {
  space: 'xxx',
  accessToken: 'xxx',
  accessPreviewToken: 'xxx',
}

const client = createClient({
  space: CONFIG.space, // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: CONFIG.accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit,
  });
  return entries;
}

export function fetchContentfulAsset(id) {
  const asset = client.getAsset(id);
  return asset;
}