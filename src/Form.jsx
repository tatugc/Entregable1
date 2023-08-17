import './Form.css'
import React, { useState } from "react";

function Form({onAddAuto}) {
    const [nombre, setNombre] = useState("");
    const [modelo, setModelo] = useState("");
    const [fuerza, setFuerza] = useState("");
    const[error,setError] = useState("");

    function handleNombre(e) {
        setNombre(e.target.value);
    }

    function handleModelo(e) {
        setModelo(e.target.value);
    }

    function handleFuerza(e) {
        setFuerza(e.target.value);
    }

    

    function registrar(e) {
        e.preventDefault();

        if(nombre.trim().length < 2 || modelo.length < 5){
            setError(" Por favor chequea que la informacion sea correcta")
            
        }else{
            
            onAddAuto({nombre,modelo,fuerza})
            setFuerza("")
            setModelo("")
            setNombre("")
            setError("")
        }
    }

    return (
        <div>
    
            <form onSubmit={registrar}>
                <div className="form">
                    <input type="text" placeholder="nombre" value={nombre} onChange={handleNombre} />
                    <input type="text" placeholder="modelo de auto" value={modelo} onChange={handleModelo} />
                    <input type="number" placeholder="caballos de fuerza" value={fuerza} onChange={handleFuerza} />
                    
                    <input className='submit'type="submit" value="Enviar"/>
                    {error && <p style={{color:"red"}} >{error} </p>}
                </div>
                
            </form>
            
        </div>
    );
}

export default Form;
