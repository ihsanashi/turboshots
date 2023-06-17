import { createClient, type ClientConfig } from '@sanity/client';
import * as fs from 'fs';

const config: ClientConfig = {
  projectId: '2ciw864r',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-13',
  token: '',
};

const client = createClient(config);

const data = await client.fetch<number>(`count(*)`);
console.log(`Number of documents: ${data}`);

client.assets
  .upload(
    'image',
    fs.createReadStream(
      '/Users/ihsanashi/Documents/Cleanshot/CleanShot 2023-06-03 at 07.17.30.jpg'
    ),
    { filename: 'test-upload.jpg' }
  )
  .then((asset) => {
    console.log(`The image was uploaded!`, asset);
  })
  .catch((error) => {
    console.error(`Upload failed: ${error.message}`);
  });
