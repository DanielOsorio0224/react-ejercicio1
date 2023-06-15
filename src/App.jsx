import './App.css'
import { EjercicioComponent } from './components/EjercicioComponent'
import { EjercicioComponent2 } from './components/EjercicioComponent2';

function App() {
  
  const date = new Date();
  const yearActual = date.getFullYear();

  return (
    <>
      <EjercicioComponent year={yearActual}/>
      <EjercicioComponent2/>
    </>
  )
}

export default App
