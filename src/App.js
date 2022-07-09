import './App.css';
import Testimonio from "./componentes/Testimonio";
import dataTestimonios from "./data/testimonios.json";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {dataTestimonios.map(dato => (
          <Testimonio 
            imagen = {dato.imagen}
            nombre = {dato.nombre}
            pais = {dato.pais}
            cargo = {dato.cargo}
            empresa = {dato.empresa}
            testimonio = {dato.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
