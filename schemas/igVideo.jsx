import React from 'react';

export default {
  name: 'igVideo',
  title: 'IG Video',
  type: 'document',
  preview: {
    select: {
      path: 'path',
      caption: 'caption',
      file: 'file',
    },
    prepare(selection) {
      const { path, file } = selection;

      console.log('selection', selection);

      return {
        title: `${file.asset._ref.replace('file-', '').replace('-mp4', '')}`,
        subtitle: `${path.replace('instagram/', '')}`,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {file.asset._ref ? '📹' : '🚫'}
          </span>
        ),
      };
    },
  },
  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'For display',
      options: {
        accept: 'video/*',
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
