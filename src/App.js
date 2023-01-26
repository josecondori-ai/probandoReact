
import './App.css';

function App() {

// let nombre='ramon'

let frutas=['manzana','pera','uva']

let datos={
  nombre:'raul',
  apellido:'lopez',
  edad:42
}

const {nombre,edad}=datos


const evento=()=>{
  console.log('hola mundo')
}


  return (
    <div className="App">
        <h1> el apellido es {nombre} y su edad es {edad}</h1>
        <button onClick={evento}>Hace click!</button>
    </div>
  );
}

export default App;
