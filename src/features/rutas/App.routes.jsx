import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from "../Login/Login";
import Inicio from "../Inicio/Inicio";
import Series from "../Series/Series";
import Peliculas from "../Peliculas/Peliculas";
import NoPage from "../404/NoPage";
import ProtectedRoutes from "../rutas/ProtectedRoutes"
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
                path="*"
                element={
                    <ProtectedRoutes>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                            <Route index element={<Inicio />} />
                            <Route path='series' element={<Series />} />
                            <Route path='peliculas' element={<Peliculas />} />
                            <Route path='*' element={<NoPage />} />
                            </Route>
                        </Routes>
                </ProtectedRoutes>   
                }
            />
            <Route path="/Login" element={
                <PublicRoutes>
                    <Login />
                </PublicRoutes>
            } />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;