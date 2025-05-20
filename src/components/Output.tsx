import { Editor } from '@tiptap/react'
import { useState } from 'react'

const Output = ({ editor }: { editor: Editor }) => {
  const [tab, setTab] = useState<'html' | 'json'>('html')
  if (!editor) return null

  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-2">
        <button
          className={`px-4 py-1 rounded transition ${
            tab === 'html'
              ? 'bg-gray-600 text-white'
              : 'bg-gray-200 dark:bg-gray-500 dark:text-gray-900'
          }`}
          onClick={() => setTab('html')}
        >
          HTML
        </button>
        <button
          className={`px-4 py-1 rounded transition ${
            tab === 'json'
              ? 'bg-gray-600 text-white'
              : 'bg-gray-200 dark:bg-gray-500 dark:text-gray-900'
          }`}
          onClick={() => setTab('json')}
        >
          JSON
        </button>
      </div>

      <pre className="whitespace-pre-wrap p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        {tab === 'html' ? editor.getHTML() : JSON.stringify(editor.getJSON(), null, 2)}
      </pre>
    </div>
  )
}

export default Output
