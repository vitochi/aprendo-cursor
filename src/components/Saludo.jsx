const Saludo = ({ nombre = 'Programador' }) => {
  return (
    <div>
      <h1>¡Hola, {nombre}!</h1>
      <p>Tu entorno profesional está listo 🚀</p>
    </div>
  )
}

export default Saludo