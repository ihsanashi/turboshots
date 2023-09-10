import groq from 'groq';

export const GET_IG_PHOTOS_OFFSET_BY_10 = groq`*[_type == "igPhoto"] | order(takenAt desc)[0...10]`;

export const GET_IG_PHOTOS_COUNT =
  groq`count(*[_type == 'igPhoto'])` as unknown as number;
