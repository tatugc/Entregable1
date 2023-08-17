import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {
  const [auto, setAuto] = useState({})


  const addAuto= (nuevoauto) => {
    setAuto(nuevoauto);
    console.log(auto)
  };


  return (
    
      <div className="App">
        <h1>Registro de Autos</h1>
        <Form onAddAuto={addAuto}/>
        <Card auto={auto}/>
      </div>
    
  )
}

export default App
