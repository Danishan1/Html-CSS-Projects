import './App.css';
import InputField from './component/Registration/js/InputField';
import React, { useState } from 'react';
import FileUpload from './component/Registration/js/ImageUpload';
import Alert from './component/Registration/js/Alert';

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

  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = () => {
    setShowAlert(false);
  };

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
        fileType={1}
      />
      {showAlert &&
        <div style={{width:"300px",  margin: "10px"}}>

          <Alert message={"This is Testing"} type={"info"} onDismiss={handleDismiss} />
        </div>
      }


    </div>
  );
}

export default App;
