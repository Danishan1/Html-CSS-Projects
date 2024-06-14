import React, { } from 'react';
// import HandleLoginRegister from './component/Main/HandleLoginRegister';
// import ChatBox from './component/Chat/js/ChatBox';
// import GroupChat from './component/Chat/js/GroupChat';
import './App.css';
import { Calendar } from './component/Calender/js/Calendar';

const App = () => {



  return (
    <div className="App">
      {/* <HandleLoginRegister /> */}
      {/* <ChatBox ></ChatBox> */}
      {/* <GroupChat /> */}
      <div style={{ width: "200px", height: "200px" }}>
        <Calendar />

      </div>


    </div>
  );
};

export default App;
