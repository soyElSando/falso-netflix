import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Layout, Login, Inicio, Series, Peliculas, NoPage, Detalles} from "../../features"
import ProtectedRoutes from "./ProtectedRoutes"
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
                            <Route path="detalles/:id" element={<Detalles />} />
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