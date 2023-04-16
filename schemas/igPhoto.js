export default {
  name: 'igPhoto',
  title: 'IG Photo',
  type: 'document',
  fields: [
    {
      name: 'asset',
      title: 'Asset',
      type: 'image',
      description: 'For display',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      of: [{ type: 'block' }],
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
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'Relative path of asset',
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
