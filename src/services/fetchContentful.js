// fetchContentful.js
import client from './apiClient.js';

export async function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = await client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit ? limit : 99,
    include: 3
  });
  return entries;
}

export async function fetchContentfulAsset(id) {
  const asset = await client.getAsset(id);
  return asset;
}
