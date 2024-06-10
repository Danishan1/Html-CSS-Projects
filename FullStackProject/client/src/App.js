import './App.css';
import InputField from './component/Registration/js/InputField';
import React, { useState, useRef } from 'react';
import FileUpload from './component/Registration/js/ImageUpload';
import AlertContainer from './component/Registration/js/AlertContainer';

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
  const alertRef = useRef(null);

  const showAlert = (message, type) => {
    if (alertRef.current) {
      alertRef.current.addAlert(message, type);
    }
  };

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


  const [alertContainer, setAlertContainer] = useState([]);

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
      <AlertContainer ref={alertRef} setAlertContainer={setAlertContainer} alertContainer={alertContainer} />

      <button onClick={() => showAlert("This is a success alert!", "success")}>
        Show Success Alert
      </button>
      <button onClick={() => showAlert("This is an error alert!", "error")}>
        Show Error Alert
      </button>
      <button onClick={() => showAlert("This is an info alert!", "info")}>
        Show Info Alert
      </button>
    </div>
  );
}

export default App;
