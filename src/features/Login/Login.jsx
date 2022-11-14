import useLogin from "./useLogin"

export const Login = () => {

  const {handleChange, handleSubmit, form} = useLogin()

return <div className="text-center">
    <h1>Ingresa tu usuario</h1>
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="form-group">

        <label className="p-2" for="email">Correo:</label>
        <input
          type="text"
          value={form.email}
          onChange={handleChange}
          name="email"
          />
      </div>
      <div className="form-group">
        <label className="p-2" for="password">Contraseña:</label>
        <input
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>

    </form>

    {/* <h5 color="white">{isAuth ? "Autenticado" : "No autenticado"}</h5> */}
  </div>;
}
