import './App.css';
import InputField from './component/Registration/js/InputField';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    mobile: '',
    email: '',
    profilePicPath: '',
    status: '',
    designation: '',
    orgId: '',
    createdBy: '',
    updatedBy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, [name]: files[0] });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit form logic
  //   console.log(formData);
  // };

  return (
    <div className="App">
      <InputField
        type={'text'}
        label={'User Name'}
        name={'name'}
        value={formData.name}
        onChange={handleChange}
        required={true}
      />

    </div>
  );
}

export default App;
