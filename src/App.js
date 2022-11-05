import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/Layout";
import Inicio from "./features/Inicio";
import Series from "./features/Series";
import Peliculas from "./features/Peliculas";
import NoPage from "./features/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='series' element={<Series />} />
          <Route path='peliculas' element={<Peliculas />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
