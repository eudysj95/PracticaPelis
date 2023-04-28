import './App.css'
import { Agregar } from './componentes/Agregar';
import { Buscador } from './componentes/Buscador';
import { Listado } from './componentes/Listado';

function App() {

  return (
    <div className="layout">

    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
    </header>

    <nav className="nav">

        <a href="#">Inicio</a>
        <a href="#">Peliculas</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>

    </nav>

    <main className="main">

       <Listado />

    </main>

    <aside className="aside">

        <div className="buscador">
            
            <Buscador />

        </div>

        <div className="agregar">
            
            <Agregar />

        </div>

    </aside>

    <footer className="footer">

        <p>Practica React - <a>victorroblesweb.es</a></p>

    </footer>
</div>
  )
}

export default App;
