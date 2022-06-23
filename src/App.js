import React from 'react';
import Upload from "./Components/Upload"
import './App.css';

function App() {
  return (
    <div className="App">

            <div className='heading'>
                <h1> Caption Generator </h1>
            </div>
            <div className='body'><Upload /></div>
            <footer> Made with 🧡 by Anurag and Divya </footer>
    </div>
    
  );
}

export default App;
