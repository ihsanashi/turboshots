import { config } from '../../../../sanity-client.config';
import { createClient } from 'next-sanity';
import { igPhoto } from '@schemas/igPhoto';
import { GET_IG_PHOTOS_OFFSET_BY_10 } from '../groq-queries/igPhotos';

export async function getIgPhotos(): Promise<igPhoto[]> {
  return createClient(config).fetch(GET_IG_PHOTOS_OFFSET_BY_10);
}
