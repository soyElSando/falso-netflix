import {  Routes, Route } from "react-router-dom";
import Layout from "../features/Layout/Layout";
import Inicio from "../features/Inicio/Inicio";
import Series from "../features/Series/Series";
import Peliculas from "../features/Peliculas/Peliculas";
import NoPage from "../features/404/NoPage";

export const Router=()=>{
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path='series' element={<Series />} />
            <Route path='peliculas' element={<Peliculas />} />
            <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
        )
    }