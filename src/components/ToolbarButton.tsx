import React from 'react'

type ToolbarButtonProps = {
  onClick: () => void
  children: React.ReactNode
  title?: string
}

const ToolbarButton = ({ onClick, children, title }: ToolbarButtonProps) => {
  return (
 <button
  onClick={onClick}
  title={title}
  className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition text-black dark:text-white"
  type="button"
>
  {children}
</button>

  )
}

export default ToolbarButton
