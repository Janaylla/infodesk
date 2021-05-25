import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const onChange = (event, mask) => {
    if (!mask) {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    } else {
      const { name, value } = event.target;
      setForm({ ...form, [name]: mask(value) });
    }
  };
  const resetForm = (formUpdate) => {
    setForm(formUpdate);
  };
  return [form, onChange, resetForm];
};
