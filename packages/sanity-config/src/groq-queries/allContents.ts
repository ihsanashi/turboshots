import groq from 'groq';

export const GET_ALL_CONTENTS_OFFSET_BY_10 = groq`*[_type in ["igPhoto",
"igStoryClip",
"igStorySnap",
"igVideo"
]] | order(takenAt desc)[0...10]`;

export const GET_ALL_CONTENTS_COUNT =
  groq`count(*[_type in ["igPhoto", "igStoryClip", "igStorySnap", "igVideo"]])` as unknown as number;
