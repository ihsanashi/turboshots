import React from 'react';

export default {
  name: 'igStoryClip',
  title: 'IG Story Clip',
  type: 'document',
  preview: {
    select: {
      _id: '_id',
      path: 'path',
    },
    prepare(selection) {
      const { _id, path } = selection;
      return {
        title: _id,
        subtitle: `${path.replace('instagram/stories/', '')}`,
        media: (
          <video height='200' width='200' muted>
            <source
              src={`https://apicdn.sanity.io/files/2ciw864r/production/${_id}.mp4`}
              type='video/mp4'
            />
            Your browser does not support video tag.
          </video>
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
      validation: (Rule) =>
        Rule.required().error('A file is required for each document.'),
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
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      description: 'Display or hide in frontend application',
    },
    {
      name: 'takenAt',
      title: 'Taken At',
      type: 'datetime',
      description: 'When the shot was taken',
    },
  ],
};
