export default {
  name: 'asset',
  type: 'document',
  title: 'Asset',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Short description of the asset',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where the shot was taken',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'Relative path of asset',
    },
    {
      name: 'aws_s3_path',
      title: 'S3 Path',
      type: 'string',
      description: 'Asset path in AWS S3 bucket',
    },
    {
      name: 'cloudinary_path',
      title: 'Cloudinary Path',
      type: 'string',
      description:
        "Path of asset in Cloudinary's media pipeline optimization tool",
    },
    {
      name: 'taken_at',
      title: 'Taken At',
      type: 'datetime',
      description: 'When the shot was taken',
    },
    {
      name: 'last_modified_at',
      title: 'Last Modified At',
      type: 'datetime',
      description: 'When the shot was last updated in AWS S3 bucket',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      imageUrl: 'cloudinary_path',
      date: 'taken_at',
    },
    prepare(selection) {
      const { title, date } = selection;
      const DATE_SPLIT = date.split('-');
      const DAY = DATE_SPLIT[2].substring(0, 2);
      const MONTH = DATE_SPLIT[1];
      const YEAR = DATE_SPLIT[0];

      return {
        title: title ? title : 'No caption',
        subtitle: `Taken on ${DAY}/${MONTH}/${YEAR}`,
      };
    },
  },
};
