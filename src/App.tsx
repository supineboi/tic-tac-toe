import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Home from './components/Home'

function App() {
  const [isStart, setIsStart] = useState<boolean>(false)

  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center'>
      {
        isStart ? (
          <Board onEndHandler={() => setIsStart(false)}/>
        ) : (
          <Home startHandler={() => setIsStart(true)}/>
        )
      }
    </main>
  )
}

export default App