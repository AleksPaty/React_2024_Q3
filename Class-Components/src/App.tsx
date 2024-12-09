import Header from './components/header/Header';
// import reactLogo from './assets/react.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalData } from './utils/localStorageManage';

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!getLocalData()) navigate('page=1');
  }, [navigate])

  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default App;
