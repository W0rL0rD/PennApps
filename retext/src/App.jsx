import './App.css'

function App() {

 
  return (
   <div className='cards'>
      <div className = "card">
        <h3 className='head'>Rectified</h3>
        <div className="content">{/* API Call here */}</div>
      </div>

      <div className = "card">
        <h4 className='head'>Rephrased</h4>
        <h4 className="sub-head">Concise, less wordy</h4>
        <div className="content">{/* API Call here */}</div>
        <h4 className="sub-head">Clearer, more verbose</h4>
        <div className="content">{/* API Call here */}</div>
      </div>
    </div>
  )
}

export default App;