// frontend/src/App.jsx
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// importamos los componentes
import CompShow from "./components/Show.jsx";
import CompCreate from "./components/Create.jsx";
import CompEdit from "./components/Edit.jsx";

// importamos el router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShow />} />
          <Route path="/create" element={<CompCreate />} />
          <Route path="/edit/:id" element={<CompEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
