import React from 'react';
import { render } from 'react-dom';

const Idioma = ({traduccion}) =>{
  if(traduccion == 'es') return <h1>Hola</h1>;
  if(traduccion == 'en') return <h1>Hello</h1>;
}

const Saludo = () =>{
  const nombre = 'Shingo';

  return <p> <Idioma traduccion="es" /> { ` ${nombre}` }</p>
}

const App = () =>{
  return <h1> <Saludo /></h1>
}

render(<App />, document.getElementById('root'));