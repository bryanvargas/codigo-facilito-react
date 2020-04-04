import React from 'react';
import { render } from 'react-dom';

//const Idioma = ({traduccion}) =>{
//  if(traduccion == 'es') return <span>Hola</span>;
//  if(traduccion == 'en') return <span>Hello</span>;
// }

const Saludo = () =>{
  const nombre = 'Shingo';
  const idioma = 'en';
/*  return(
    <div>
      {
        idioma === "es" && <p>Hola</p> 
      }
      {
        idioma === 'en' && <p>Hola</p> 
      }
    </div>
  ) */
  return(
    <div>
      {
        idioma === 'en' ? <p>Hello</p> : <p>hola</p>
      }
    </div>
  )

 // return <p> <Idioma traduccion="es" /> { ` ${nombre}` }</p>
}

const App = () =>{
  return <h1> <Saludo /></h1>
}

render(<App />, document.getElementById('root'));