import React, {  } from 'react';
import UserForm from './component/Registration/js/RegrsterUserForm';
import './App.css';

const App = () => {

  const orgId = 'AAAAAA'; // Example orgId
  const createdBy = 'AAAAAA'; // Example createdBy

  return (
    <div className="App">
      <UserForm orgId={orgId} createdBy={createdBy} />
    </div>
  );
};

export default App;
