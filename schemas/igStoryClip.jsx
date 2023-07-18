export default {
  name: 'igStoryClip',
  title: 'IG Story Clip',
  type: 'document',
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
      name: 'taken_at',
      title: 'Taken At',
      type: 'datetime',
      description: 'When the shot was taken',
    },
  ],
};
