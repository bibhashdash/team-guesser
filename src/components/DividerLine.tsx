interface DividerLineProps {
  style: 'dashed' | 'dotted',
}

export const DividerLine = ({style}:DividerLineProps) => {

  return (
    <div className={`h-1 w-full border-2 border-white100 ${style === 'dashed' ? 'border-dashed' : 'border-dotted' }`} />
  )
}
