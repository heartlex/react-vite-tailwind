import { useState } from 'react'
import reactLogo from './assets/react.svg'
// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg'
// import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-24 h-24 transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-24 h-24 transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mt-6">Vite + React</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 rounded-lg bg-gray-700 hover:border-blue-500 border border-transparent text-lg font-medium transition-colors"
      >
        count is {count}
      </button>
      <div className="bg-gray-800 p-6 mt-4 rounded-xl shadow-lg">
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className="mt-6 text-gray-400">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
