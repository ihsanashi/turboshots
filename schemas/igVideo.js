export default {
  name: 'igVideo',
  title: 'IG Video',
  type: 'document',
  fields: [
    {
      name: 'asset',
      title: 'Asset',
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
    {
      name: 'uploaded_at',
      title: 'Uploaded At',
      type: 'datetime',
      description: 'When the shot was uploaded to Sanity',
    },
    {
      name: 'last_modified_at',
      title: 'Last Modified At',
      type: 'datetime',
      description: 'When the shot was last updated',
    },
  ],
}
