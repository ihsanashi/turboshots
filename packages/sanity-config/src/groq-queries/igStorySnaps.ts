import groq from 'groq';

export const GET_IG_STORY_SNAPS_OFFSET_BY_10 = groq`*[_type == "igStorySnap"] | order(takenAt desc)[0...10]`;

export const GET_IG_STORY_SNAPS_COUNT =
  groq`count(*[_type == 'igStorySnap'])` as unknown as number;
