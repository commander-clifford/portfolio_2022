import { createClient } from 'contentful';

const CONFIG = {
  space: '7ajvyg0idzck',
  accessToken: 'MVz7rhZtdN20AXA0K4WGHdKV2H3imbv9B8PtmjBdF8I',
  accessPreviewToken: 'LoVFKsPlKMSbwOKCLp015dfSWIuJ6YhxHJECAERJF-Y',
}

const client = createClient({
  space: CONFIG.space, // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: CONFIG.accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit ? limit : 9,
    include: 2
  });
  return entries;
}

export function fetchContentfulAsset(id) {
  const asset = client.getAsset(id);
  return asset;
}