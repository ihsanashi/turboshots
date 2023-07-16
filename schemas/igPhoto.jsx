import React from 'react';

export default {
  name: 'igPhoto',
  title: 'IG Photo',
  type: 'document',
  preview: {
    select: {
      _id: '_id',
      image: 'image',
      path: 'path',
    },
    prepare(selection) {
      const { _id, path, image } = selection;
      return {
        title: _id,
        subtitle: `${
          path.includes('/photos/')
            ? path.replace('instagram/photos/', '')
            : path.replace('instagram/stories/', '')
        }`,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {image.sanityAsset ? '📷' : '🚫'}
          </span>
        ),
      };
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'For display',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'Relative path of asset',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'Caption to display',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where this was taken',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Feed',
            value: 'feed',
          },
          {
            title: 'Story',
            value: 'story',
          },
        ],
        layout: 'dropdown',
      },
      description: 'Define the feed it was first posted to',
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      description: 'Display or hide in frontend application',
    },
    {
      name: 'taken_at',
      title: 'Taken At',
      type: 'datetime',
      description: 'When the shot was taken',
    },
  ],
};