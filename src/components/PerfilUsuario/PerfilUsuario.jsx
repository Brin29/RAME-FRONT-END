import React, { useState, useEffect } from "react";
import "./PerfilUsuario.css"; // Importa el archivo CSS

export default function PerfilUsuario () {

  // Estados iniciales, se cargan desde localStorage si existen
  // RENDERIZAR EN UN OBJETO
  const [nombre, setNombre] = useState(
    () => localStorage.getItem("nombre") || "Juan Pérez"
  );
  const [genero, setGenero] = useState(
    () => localStorage.getItem("genero") || "Masculino"
  );
  const [email, setEmail] = useState(
    () => localStorage.getItem("email") || "usuario@example.com"
  );
  const [direccion, setDireccion] = useState(
    () => localStorage.getItem("direccion") || "Calle Falsa 123"
  );
  const [telefono, setTelefono] = useState(
    () => localStorage.getItem("telefono") || "123-456-7890"
  );
  const [editando, setEditando] = useState(false);

  
  useEffect(() => {
    // Cargar datos desde localStorage cuando el componente se monte
    setNombre(localStorage.getItem("nombre") || "Juan Pérez");
    setGenero(localStorage.getItem("genero") || "Masculino");
    setEmail(localStorage.getItem("email") || "usuario@example.com");
    setDireccion(localStorage.getItem("direccion") || "Calle Falsa 123");
    setTelefono(localStorage.getItem("telefono") || "123-456-7890");
  }, []);

  const guardarCambios = () => {
    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("genero", genero);
    localStorage.setItem("email", email);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("telefono", telefono);

    // Finalizar edición
    setEditando(false);
  };

  return (
    <div className="perfil-container">
      {/* Encabezado del perfil */}
      <div className="perfil-header">
        <h1>RAME FASHION</h1>
      </div>
      <h3>Resumen de tu cuenta</h3>

      <div className="perfil-layout">
        {/* Sección de botones alineados a la izquierda */}
        <div className="acciones-adicionales">
          <h4>BIENVENIDO!!</h4>

          <button className="carrito-button">Carrito</button>
          <button className="cambios-button">Cambios y Devoluciones</button>
          <button className="compra-button">Compra en Línea</button>
          <button className="salir-button">Salir</button>
        </div>

        {/* Contenido principal del perfil */}
        <div className="perfil-main">
          {/* Información personal con opción de edición */}
          <div className="perfil-info">
            <h2>Información Personal</h2>
            {editando ? (
              <div className="editar-info">
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  placeholder="Género"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  placeholder="Dirección"
                />
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Teléfono"
                />
                <button onClick={guardarCambios} className="guardar-button">
                  Guardar
                </button>
              </div>
            ) : (
              <div className="ver-info">
                <p>
                  <strong>Nombre:</strong> {nombre}
                </p>
                <p>
                  <strong>Género:</strong> {genero}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Dirección:</strong> {direccion}
                </p>
                <p>
                  <strong>Teléfono:</strong> {telefono}
                </p>
                <button
                  onClick={() => setEditando(true)}
                  className="editar-button"
                >
                  Editar Información
                </button>
              </div>
            )}
          </div>

          {/* Cuadro de información adicional */}
          <div className="info-adicional">
            <h2>Información Adicional</h2>
            <p>
              <strong>Estado de la Cuenta:</strong> Activa
            </p>
            <p>
              <strong>Dirección:</strong> {direccion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

