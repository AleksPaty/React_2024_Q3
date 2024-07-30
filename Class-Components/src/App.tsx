import Header from './components/header/Header';
// import reactLogo from './assets/react.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default App;
