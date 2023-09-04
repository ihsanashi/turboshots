'use client';

import { Button, Paragraph, Select } from 'ui';

export default function Home() {
  const fruits = [
    {
      label: 'Apple',
      value: 'apple',
      disabled: false,
    },
    {
      label: 'Banana',
      value: 'banana',
      disabled: false,
    },
    {
      label: 'Blueberry',
      value: 'blueberry',
      disabled: false,
    },
    {
      label: 'Grapes',
      value: 'grapes',
      disabled: true,
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
      disabled: false,
    },
  ];

  const vegetables = [
    {
      label: 'Potato',
      value: 'potato',
      disabled: false,
    },
    {
      label: 'Spinach',
      value: 'spinach',
      disabled: false,
    },
  ];

  const proteins = [
    {
      label: 'Chicken',
      value: 'chicken',
      disabled: false,
    },
    {
      label: 'Meat',
      value: 'meat',
      disabled: true,
    },
    {
      label: 'Salmon',
      value: 'salmon',
      disabled: false,
    },
  ];

  return (
    <div className='flex flex-col items-center justify-between space-y-5 p-24'>
      <h1 className='text-2xl font-bold'>Hello world</h1>
      <Paragraph text='Well hello there' />
      <Button>Boop</Button>
      <Select placeholder='Select one' ariaLabel='Select menu'>
        <Select.Content>
          <Select.Group label='Fruits' items={fruits} />
          <Select.Separator />
          <Select.Group label='Vegetables' items={vegetables} />
          <Select.Separator />
          <Select.Group label='Proteins' items={proteins} />
        </Select.Content>
      </Select>
    </div>
  );
}
