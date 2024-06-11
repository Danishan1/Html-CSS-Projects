import React, {  } from 'react';
import UserForm from './component/Registration/js/RegrsterUserForm';
import './App.css';

const App = () => {

  const orgId = 'ORG12345'; // Example orgId
  const createdBy = 'adminUser'; // Example createdBy

  return (
    <div className="App">
      <UserForm orgId={orgId} createdBy={createdBy} />
    </div>
  );
};

export default App;
