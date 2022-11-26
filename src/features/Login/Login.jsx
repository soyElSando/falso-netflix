import useLogin from "./useLogin"
import './login.css'

export const Login = () => {

  const {handleChange, handleSubmit, form} = useLogin()

return <div className="text-center">
    <div
     className="text-danger logo">Falso Netflix</div>
     <div className="form-wrapper">
      <form className="p-3" onSubmit={handleSubmit}>
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
    </div>
  </div>;
}
