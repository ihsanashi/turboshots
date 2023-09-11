import groq from 'groq';

export const GET_IG_PHOTOS_OFFSET_BY_10 = groq`
  *[_type == "igPhoto"]{
    _id,
    _createdAt,
    _updatedAt,
    caption,
    "image": image.asset->url,
    location,
    path,
    "slug": slug.current,
    takenAt,
    visible
  } | order(takenAt desc)[0...10]`;

export const GET_IG_PHOTOS_COUNT =
  groq`count(*[_type == 'igPhoto'])` as unknown as number;
