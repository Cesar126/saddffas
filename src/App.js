import logo from './logo.svg';
import './App.css';
import Saludos from './componentes/Saludos'; 
import Ejercicio01 from './componentes/Ejercicio01';
import Tareas from './componentes/Tareas';

function App() {
  return (
  <div className="APP">
    <h1> Primeros pasos en react </h1>
    <h2> Bienvenidos</h2>
    <Saludos nombre="Cesar Palma"/>
    <Saludos nombre="Jose"/>
    <Ejercicio01 />
    <Tareas />
     
  </div>
  );
}

export default App;
