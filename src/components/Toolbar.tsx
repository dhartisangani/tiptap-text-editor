import { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  Underline,
  Code,
  Codepen, // for code block icon from lucide-react
  ImageIcon,
  List,
  ListOrdered,
  Undo2,
  Redo2,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Link as LinkIcon,
  Minus,
  Type,
} from 'lucide-react'
import ToolbarButton from './ToolbarButton'
import { useRef } from 'react'

const Toolbar = ({ editor }: { editor: Editor }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  if (!editor) return null


  const addImageFromFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const src = reader.result as string
      editor.chain().focus().setImage({ src }).run()
    }
    reader.readAsDataURL(file)
  }


  return (
<div className="flex flex-wrap gap-2 border p-2 rounded bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} title="Bold">
        <Bold size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic">
        <Italic size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline">
        <Underline size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Heading 1">
        <Heading1 size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2">
        <Heading2 size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3">
        <Heading3 size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet List">
        <List size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered List">
        <ListOrdered size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code Block">
        <Codepen size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote">
        <Quote size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
        <Minus size={16} />
      </ToolbarButton>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={addImageFromFile}
      />
      <ToolbarButton
        onClick={() => fileInputRef.current?.click()}
        title="Insert Image from file"
      >
        <ImageIcon size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo">
        <Undo2 size={16} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo">
        <Redo2 size={16} />
      </ToolbarButton>
    </div>
  )
}

export default Toolbar
