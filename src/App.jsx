import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Orb from './components/squreBg'
import ClickSpark from './components/clickspark'
import TrueFocus from './components/Text';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      {/* <div
        className="bg-gradient-to-br from-blue-500 to-blue-700 text-white h-[100vh] w-full block"
   
      ></div> */}
        
     <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
     
         <TrueFocus 
        sentence="I Love You Samu"
        manualMode={true}
        blurAmount={5}
        borderColor="white"
        animationDuration={1}
        pauseBetweenAnimations={0}
        />
      </div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        />
      </div>
     
     
    </>
  )
}

export default App;
