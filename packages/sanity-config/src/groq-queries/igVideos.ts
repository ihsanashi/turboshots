import groq from 'groq';

export const GET_IG_VIDEOS = groq`*[_type == "igVideo"] | order(takenAt desc)`;

export const GET_IG_VIDEOS_COUNT =
  groq`count(*[_type == 'igVideo'])` as unknown as number;
