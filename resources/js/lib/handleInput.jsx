export const handleChange = (e, setFormValues) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

export function handleImageChange(event, setFormValues, name = 'image')  {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name] : event.target.files[0],
    }));
}