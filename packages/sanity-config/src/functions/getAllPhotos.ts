import { config } from 'sanity.config';
import { createClient, groq } from 'next-sanity';
import { igPhoto } from '@schemas/igPhoto';

export async function getAllPhotos(): Promise<igPhoto[]> {
  return createClient(config).fetch(groq`*[_type == "igPhoto"]{
    _id,
    _created_at,
    _updated_at,
    caption,
    image,
    location,
    path,
    taken_at,
    visible
  }`);
}
