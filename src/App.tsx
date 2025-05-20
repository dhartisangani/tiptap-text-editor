import { useState } from 'react'
import Editor from './components/Editor'

const App = () => {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className="max-w-4xl mx-auto py-10">
        <button
          className="mb-4 p-2 border rounded"
          onClick={() => setDark(!dark)}
        >
         Swith Mode
        </button>
        <Editor />
      </div>
    </div>
  )
}

export default App
