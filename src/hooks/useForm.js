/* import React, { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = createUser()
    console.log("asd");
    const formData = new FormData();
    formData.append("user", form.user);
    formData.append("pass", form.pass);
    // axios.post("/api/login", formData);
  };

  return [form, handleChange, handleSubmit];
};

export default useForm;
*/