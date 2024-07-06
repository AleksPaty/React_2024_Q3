import { Component } from 'react';
import Header from './components/header/Header';
// import reactLogo from './assets/react.svg';
import './App.css';
import Main from './components/main/Main';
import { getLocalData } from './utils/localStorageManage';

class App extends Component {
  state = {
    requestWord: getLocalData() || '',
  };
  changeRequestWord(word: string) {
    this.setState({ requestWord: word });
  }

  render() {
    return (
      <>
        <Header changeRequestWord={this.changeRequestWord.bind(this)} />
        <Main requestWord={this.state.requestWord} />
      </>
    )
  }
}

export default App;
