import { useState } from "react";

const useForm = (intialState) => {
  const [formData, setFormData] = useState(intialState);

  return [
    formData,
    (e) => setFormData({ ...formData, [e.target.name]: e.target.value }),
  ];
};

export default useForm;
