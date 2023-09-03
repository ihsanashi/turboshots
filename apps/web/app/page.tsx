"use client"

import { Button, Paragraph, Select } from 'ui'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-5 justify-between p-24">
      <h1 className='font-bold text-2xl'>Hello world</h1>
      <Paragraph text='Well hello there' />
      <Button>Boop</Button>
      <Select />
    </div>
  )
}
