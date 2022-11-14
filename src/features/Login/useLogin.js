import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../features";

const useLogin = () => {
    const navigate = useNavigate();

  const { setIsAuth, setUser, isAuth } = useContext(AuthContext);

  const [form, setForm] = useState ({
    email:"",
    password:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = form;

    setIsAuth(true);
    setUser(email);

    navigate("/");
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,

    });
    };

    return {handleChange, handleSubmit, form}
}

export default useLogin;