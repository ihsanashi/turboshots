import { gql } from '@apollo/client';

export const GET_ALL_IG_STORY_SNAPS = gql`
  query allIgStorySnaps($offset: Int) {
    allIgStorySnap(sort: { takenAt: DESC }, limit: 10, offset: $offset) {
      _id
      _createdAt
      _updatedAt
      image {
        asset {
          _id
          _createdAt
          _updatedAt
          label
          title
          description
          altText
          extension
          path
          url
        }
      }
      path
      caption
      location
      visible
      takenAt
    }
  }
`;
