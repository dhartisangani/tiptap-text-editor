import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import Dropcursor from '@tiptap/extension-dropcursor'
import { useEffect } from 'react'
import Toolbar from './Toolbar'
import Output from './Output'

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      Underline,
      Image,
      Link,
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,
      Dropcursor,
    ],
    content: '<p>Hello Cloudairy!</p>',
  })

  useEffect(() => {
    return () => {
      editor?.destroy()
    }
  }, [editor])

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()

    const file = event.dataTransfer.files?.[0]
    if (!file || !file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = () => {
      const src = reader.result as string
      editor?.chain().focus().setImage({ src }).run()
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white">
      {editor && <Toolbar editor={editor} />}
      <div
        className="border rounded p-4 min-h-[300px] prose dark:prose-invert bg-white dark:bg-gray-700"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()} 
      >
        <EditorContent
          editor={editor}
          className="prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
        />
      </div>
      {editor && <Output editor={editor} />}
    </div>
  )
}

export default Editor
