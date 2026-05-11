import { useState } from 'react'
import './App.css'

function App() {
    const [role, setRole] = useState("")

    return (
    <div>
      <h1>PrepMate</h1>
      <label>What role are you preparing for?</label>
      <input
        type="text"
        placeholder="e.g. Civil Engineer, Accountant, Teacher..."
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button>Start Interview</button>
       

    </div>
    );
  
}

export default App
