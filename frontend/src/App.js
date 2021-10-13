import { useEffect, useState } from 'react';

import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import HistoryPanel from './components/HistoryPanel/HistoryPanel';
import Input from './components/Input/Input';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory([...chatHistory, msg]);
      console.log(chatHistory);
    });
  })

  const send = (e) => {
    if (e.keyCode === 13) {
      sendMsg(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="App">
        <Header />
        <HistoryPanel chatHistory={chatHistory} />
        <Input send={send} />
    </div>
  );
}

export default App;
