export const config = {
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  apiVersion: '2023-06-06',
  useCdn: true,
};
