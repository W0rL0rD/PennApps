import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className = "main-container">
      <div className = "rectified-el">
        <h3 className='head'>Rectified</h3>

        <h4 className='head'>Rephrased</h4>

      </div>
      <div className = "rephrashed-el">
        
        <h4 className="sub-head">Concise, less wordy</h4>
        <div className="API-call">{/* API Call here */}</div>
        <h4 className="sub-head">Clearer, more verbose</h4>
        <div className="API-call">{/* API Call here */}</div>
      </div>
    </div>
  )
}

export default App;