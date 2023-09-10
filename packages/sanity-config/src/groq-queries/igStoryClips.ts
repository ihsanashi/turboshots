import groq from 'groq';

export const GET_IG_STORY_CLIPS_OFFSET_BY_10 = groq`*[_type == "igStoryClip"] | order(takenAt desc)[0...10]`;

export const GET_IG_STORY_CLIPS_COUNT =
  groq`count(*[_type == 'igStoryClip'])` as unknown as number;
