import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Home from './components/Home'
import useCustomCursor from "./hook/useCustomCursor";
import { colorPanel, getPlayerColor, type Players } from './shared/utils';

function App() {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [cursorSymbol, setCursorSymbol] = useState<Players | null>(null);
  
  const cursorRef = useCustomCursor();

  return (
    <>
      <div 
          ref={cursorRef} 
          className='hidden fixed lg:flex justify-center items-center text-6xl font-bold top-0 left-0 pointer-events-none size-14 rounded-full'
          style={{
              ...!cursorSymbol ? {
                backgroundColor: colorPanel.dark,
                zIndex: 30
              } : {
                color: getPlayerColor(cursorSymbol)
              }
          }}
      >{cursorSymbol?.toUpperCase()}</div>
      <main className='h-screen w-screen flex flex-col justify-center items-center'>
        {
          isStart ? (
            <Board 
              onChangeCursor={setCursorSymbol}
              onEndHandler={() => setIsStart(false)}
            />
          ) : (
            <Home startHandler={() => setIsStart(true)}/>
          )
        }
      </main>
    </>
  )
}

export default App