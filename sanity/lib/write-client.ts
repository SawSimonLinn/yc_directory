import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, token } from '../env';

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

// if (!writeClient.token) {
//   throw new Error(
//     'Sanity write client requires a token. Please check your environment variables.'
//   );
// }
