import Image from 'next/image';
import { getIgPhotos } from '../../../packages/sanity-config/src/functions';

export default async function Home() {
  const photos = await getIgPhotos();

  return (
    <div className='flex flex-col items-center justify-between space-y-5 p-24'>
      <ul className='grid grid-cols-3 gap-5'>
        {photos.map((photo) => (
          <li key={photo._id}>
            <Image
              className='h-48 w-96 object-cover'
              src={photo.image}
              alt={photo.caption ?? `Image`}
              height={300}
              width={300}
              objectFit=''
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
