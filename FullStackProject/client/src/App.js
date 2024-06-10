import './App.css';
import InputField from './component/Registration/js/InputField';
import React, { useState } from 'react';
import FileUpload from './component/Registration/js/FileUpload';

function App() {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    mobile: '',
    email: '',
    profilePic: '',
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

  const handleFileChange = (file) => {
    setFormData({ ...formData, profilePic: file });

  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit form logic
  //   console.log(formData);
  // };

  console.log(formData)

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
      <br></br>
      <FileUpload
        label={"Profile Pic"}
        name={"Profile Pic"}
        onChange={handleFileChange}
      />


    </div>
  );
}

export default App;
