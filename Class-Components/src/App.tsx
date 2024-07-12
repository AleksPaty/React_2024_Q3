import { useState } from 'react';
import Header from './components/header/Header';
// import reactLogo from './assets/react.svg';
import './App.css';
import Main from './components/main/Main';
import { getLocalData } from './utils/localStorageManage';

function App() {
  const [requestWord, setWord] = useState(getLocalData() || '');
  const changeRequestWord = (word: string) => {
    setWord(word);
  }

  return (
    <>
      <Header changeRequestWord={changeRequestWord} />
      <Main requestWord={requestWord} />
    </>
  )
}

export default App;
