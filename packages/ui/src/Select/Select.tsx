"use client"

import * as SelectPrimitive from '@radix-ui/react-select';

export const Select = (): JSX.Element => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger>
        <SelectPrimitive.Value placeholder='Placeholder value here...' />
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Root>
  )
}

Select.displayName = 'Select';