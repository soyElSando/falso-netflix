import { useState } from "react";

export const useForm = (form) => {
  const [data, setData] = useState(form);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event, cb) => {
    event.preventDefault();

    if (cb) {
      await cb(data);
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
  };
};
