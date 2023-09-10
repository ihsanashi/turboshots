import { gql } from '@apollo/client';

export const GET_ALL_IG_PHOTOS = gql`
  query allIgPhotos($offset: Int) {
    allIgPhoto(sort: { takenAt: DESC }, limit: 10, offset: $offset) {
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
