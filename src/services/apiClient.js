// apiClient.js
import { createClient } from 'contentful';
import { CONFIG } from './config.js';

const client = createClient({
  space: CONFIG.space,
  accessToken: CONFIG.accessToken
});

export default client;
