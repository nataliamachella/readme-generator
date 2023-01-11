import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contenedor">
      <div className="formulario">
        <h1>README Generator</h1>
        <form>
          <label>Título</label>
          <input value={form.title} name="title" onChange={handleChange} />

          <label>Descripción</label>
          <textarea
            value={form.description}
            name="description"
            onChange={handleChange}
          />

          <label>Imagen de Portada</label>
          <input value={form.image} name="image" onChange={handleChange} />

          <label>Herramientas</label>
          <input value={form.stack} name="stack" onChange={handleChange} />

          <label>Licencia</label>
          <input value={form.license} name="license" onChange={handleChange} />
        </form>
      </div>

      <div className="prev">
        <h1>{form.title}</h1>
        <hr />

        <p>{form.description}</p>
        <img src="https://via.placeholder.com/468x300?text=App+Screenshot+Here" />
        <h2>Stack Tecnológico</h2>
        <hr />
      </div>
      <div className="code">
        <p>
          # {form.title} <br />
          {form.description} <br />
          ![App Screenshot]({form.image})
        </p>
      </div>
    </div>
  );
}

export default App;
