import React from 'react';
import { render } from 'react-dom';

const Saludo = () =>{
  const nombre = 'Shingo';

  return <p> { ` Hola Mundo ${nombre} ` }</p>
}

const App = () =>{
  return <h1> <Saludo /></h1>
}

render(<App />, document.getElementById('root'));