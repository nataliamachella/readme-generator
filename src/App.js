import "./App.css";
import { useState } from "react";
import logoPreview from "./assets/Icon-preview.png";
import logoCopy from "./assets/Icon-copy.png";

function App() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className="header">
        <h1>README Generator</h1>
      </header>
      <div className="contenedor">
        <div className="formulario">
          <form>
            <div>
              <label>Título</label>
              <input value={form.title} name="title" onChange={handleChange} />
            </div>

            <div>
              <label>Descripción</label>
              <textarea
                value={form.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Imagen de Portada</label>
              <input value={form.image} name="image" onChange={handleChange} />
            </div>
            <div>
              <label>Stack Tecnológico</label>
              <input value={form.stack} name="stack" onChange={handleChange} />
            </div>
            <div>
              <label>Licencia</label>
              <input
                value={form.license}
                name="license"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        {/*  CÓDIGO */}
        <div className="code">
          <div className="code__icon">
            <img src={logoCopy} />
          </div>
          <p>
            # {form.title} <br />
            {form.description} <br />
            ![App Screenshot]({form.image})
          </p>
        </div>

        {/*  VISTA PREVIA */}
        <div className="prev">
          <div className="prev__icon">
            <img src={logoPreview} />
          </div>
          <h1>{form.title}</h1>

          <p>{form.description}</p>
          <img
            src="https://via.placeholder.com/468x300?text=App+Screenshot"
            height={300}
            width={430}
          />
          <h2>Stack Tecnológico</h2>
        </div>
      </div>
    </>
  );
}

export default App;
