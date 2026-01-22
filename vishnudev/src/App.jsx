import React from 'react'
import Home from './pages/home'
import DotGrid from './components/DotGrid.jsx'
const App = () => {
  return (
    <div>
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black"> 
 <div className="absolute inset-0 w-[200vh">
          <DotGrid
            dotSize={2}
            gap={5}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            speedTrigger={100}
            shockRadius={250}
            shockStrength={5}
            maxSpeed={5000}
            resistance={750}
            returnDuration={1.5}
          />
          </div>
          
  </div>


     


      
      <Home/>
      
    </div>
  )
}

export default App