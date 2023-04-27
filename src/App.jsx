import './App.css'

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

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>

        <div className="caja">
            <h2>Pelicula</h2>
            <p>Descripcion</p>
            <button className="botones botonEditar">Editar</button>
            <button className="botones botonEliminar">Eliminar</button>
        </div>


    </main>

    <aside className="aside">

        <div className="buscador">
            <h2>Buscar</h2>
            <input  type="text"
                    className="barraBuscar"/>
            <button className="botonBuscar">Buscar</button>
        </div>

        <div className="agregar">
            <h2>Agregar Pelicula</h2>
            <input  type="text"
                    name="titulo"
                    value="Titulo"></input>

            <input  type="text"
                    name="descripcion"
                    value="Descripcion"></input>
            <button className="botonAgregar">Agregar</button>
        </div>

    </aside>

    <footer className="footer">

        <p>Practica React - <a>victorroblesweb.es</a></p>

    </footer>
</div>
  )
}

export default App
