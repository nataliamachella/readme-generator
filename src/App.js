import "./App.css";
import { Children, useState } from "react";
import iconPreview from "./assets/Icon-preview.png";
import iconCopy from "./assets/Icon-copy.png";
import iconRefresh from "./assets/Icon-refresh.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

import TurndownService from "turndown";

function App() {
  const [form, setForm] = useState({});
  const [copied, setCopied] = useState(false);

  const turndownService = new TurndownService();

  const element = turndownService.turndown(document.getElementById("copy"));
  console.log(element);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetInputs = () => {
    setForm({});
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
              <input
                value={form.title}
                name="title"
                placeholder="Escribe aquí el título de tu Proyecto"
                onChange={handleChange}
              />
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
              <label>URL de la imagen</label>
              <input
                type="url"
                value={form.image}
                name="image"
                placeholder="https://ejemplo.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Stack Tecnológico</label>
              <input
                value={form.backend}
                name="backend"
                onChange={handleChange}
                placeholder="Backend:"
              />
              <input
                value={form.frontend}
                name="frontend"
                onChange={handleChange}
                placeholder="Frontend:"
              />
            </div>
            <div>
              <label>Licencia:</label>
              <select onChange={handleChange} value={form.value} name="license">
                <option value="">--Elija una opción--</option>
                <option value="MIT">MIT</option>
                <option value="Sin Licencia">Sin Licencia</option>
              </select>
            </div>
            <button type="submit" onSubmit={resetInputs}>
              <img src={iconRefresh} height="20" width="20" />
              Reiniciar
            </button>
          </form>
        </div>
        {/*  CÓDIGO */}
        <div id="code" className="code">
          <CopyToClipboard text={element} onCopy={() => setCopied(true)}>
            <span className="code__icon" onClick={() => toast("Copiado!")}>
              <img src={iconCopy} height="35" width="35" />
            </span>
          </CopyToClipboard>
          {copied ? (
            <Toaster
              toastOptions={{
                style: {
                  background: "white",
                  padding: "10px",
                  color: "#10b981",
                },
              }}
              containerStyle={{
                position: "relative",
              }}
            />
          ) : null}

          <h4># {form.title}</h4>
          <p>{form.description} </p>
          <p> ![App Screenshot]({form.image})</p>
          <h4>## Stack Tecnológico</h4>
          <p>**Backend:** {form.backend} </p>
          <p> **Frontend:** {form.frontend}</p>
          <h4>## Licencia</h4>
          <p>[{form.license}](https://choosealicense.com/licenses/mit/)</p>
        </div>

        {/*  VISTA PREVIA */}
        <div className="prev">
          <div className="prev__icon">
            <img src={iconPreview} width="35" height="40" />
          </div>
          <div id="copy">
            <h1>{form.title}</h1>

            <p>{form.description}</p>
            <img
              src="https://via.placeholder.com/468x300?text=App+Screenshot"
              height={300}
              width={450}
            />
            <h2>Stack Tecnológico</h2>
            <p>
              <b>Backend:</b> {form.backend}
            </p>
            <p>
              <b>Frontend:</b> {form.frontend}
            </p>
            <h2>Licencia</h2>
            <a href="https://choosealicense.com/licenses/mit/">
              {form.license}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
