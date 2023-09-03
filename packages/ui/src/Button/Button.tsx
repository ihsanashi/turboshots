import { ReactNode } from 'react'

export const Button = ({ children }: { children: ReactNode} ): JSX.Element => {
  return (
    <button className='ui-border ui-rounded ui-px-2 ui-hover:bg-gray-50'>
      {children}
    </button>
  )
}

Button.displayName = 'Button'
