import React, { useState } from 'react'; // Agrega esta línea para importar useState desde React

const ComboBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      setValue(newValue);
      alert('El valor se ha actualizado a: ' + newValue);
    } else {
      alert('Por favor, ingresa solo números.');
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Ingrese solo números"
    />
  );
};

export default ComboBox;
