import React from 'react';
import { render } from 'react-dom';

const Idioma = ({traduccion}) =>{
  if(traduccion == 'es') return <span>Hola</span>;
  if(traduccion == 'en') return <span>Hello</span>;
}

const Saludo = () =>{
  const nombre = 'Shingo';

  return <p> <Idioma traduccion="es" /> { ` ${nombre}` }</p>
}

const App = () =>{
  return <h1> <Saludo /></h1>
}

render(<App />, document.getElementById('root'));