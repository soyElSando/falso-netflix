import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useFetch, useForm } from "../../commons";
import { loginService } from "./login.services";
import './login.css'

export const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    data: form,
    handleChange,
    handleSubmit,
  } = useForm({
    email: "",
    password: "",
  });

  const { data, isLoading, error, setCanFetch } = useFetch(
    () => loginService(form.email, form.password),
    false
  );

  const onSubmited = async () => {
    setCanFetch(true);
  };

  useEffect(() => {
    if (data.user) {
      login(data.user);
      navigate("/", {
        replace: true,
      });
    }
  }, [data]);

return <div className="text-center">
    <div
     className="text-danger logo">Falso Netflix</div>
     <div className="form-wrapper">
      <form className="p-3" onSubmit={(e) => {
          handleSubmit(e, onSubmited);
        }}>
        <div className="form-title mb-3 h2">Ingresa tu usuario</div>
        <div className="form-group">
          <input
          type="text"
          value={form.email}
          onChange={handleChange}
          name="email"
          placeholder="Correo"
          className="form-group w-90"
          />
        </div>
        <div className="form-group">
          <input
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
          placeholder="Contraseña"
          className="form-group w-90"
        />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-danger w-90">Iniciar Sesión</button>
        </div>
      </form>
      {isLoading && <p>Cargando...</p>}
      {error && <p className="alert alert-warning">usuario y/o contraseña incorrectos</p>}
    </div>
  </div>;
}
