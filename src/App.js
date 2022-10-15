import './App.css';
import ReactDOM from "react-dom/client";
import Series from './componentes/Series';
import Peliculas from './componentes/Peliculas';
import Layout from './componentes/Layout';
import Inicio from './componentes/Inicio';
import NoPage from './componentes/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="series" element={<Series />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
