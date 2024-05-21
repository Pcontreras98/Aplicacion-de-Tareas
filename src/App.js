import './App.css';
import pcLogo from './imagenes/pabloContrerasLogo.png';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='pc-logo-contenedor'>
          <img
            src={pcLogo}
            className='pc-logo' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
