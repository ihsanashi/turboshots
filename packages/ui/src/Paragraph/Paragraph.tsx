export const Paragraph = ({ text }: { text: string }): JSX.Element => {
  return (
    <p className='ui-font-normal ui-text-base'>{text}</p>
  )
}

Paragraph.displayName = 'Paragraph'
