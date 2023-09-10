export default {
  name: 'igPhoto',
  title: 'IG Photo',
  type: 'document',
  preview: {
    select: {
      _id: '_id',
      image: 'image.asset',
      path: 'path',
    },
    prepare(selection) {
      const { _id, path, image } = selection;
      return {
        title: _id,
        subtitle: `${path.replace('instagram/photos/', '')}`,
        media: image,
      };
    },
  },
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'This field will be used by the frontend to differentiate between each different post',
      option: {
        maxLength: 200,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'For display',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      validation: (Rule) =>
        Rule.required().error('An image is required for each document.'),
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
