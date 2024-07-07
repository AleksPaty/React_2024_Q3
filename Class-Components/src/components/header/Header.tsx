import { ChangeEvent, Component, FormEvent } from "react";
import headerStyles from "./Header.module.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { getLocalData, setLocalData } from "../../utils/localStorageManage";
import { validateWord } from "../../utils/validation";

class Header extends Component<{changeRequestWord: (word: string) => void}> {
  state = {
    inputWord: getLocalData() || '',
  };

  submitHandle = (e: FormEvent) => {
    e.preventDefault();
    const inputWord = validateWord(this.state.inputWord);
    setLocalData(inputWord);
    this.props.changeRequestWord(inputWord);
  }
  changeHandle = (e: ChangeEvent) => {
    this.setState({inputWord: (e.target as HTMLInputElement).value})
  }

  render() {
    const inputProps = {
      type: "text",
      placeholder: "Search",
      value: this.state.inputWord,
      onChange: this.changeHandle.bind(this)
    }
    return (
      <header className={headerStyles.header}>
        <h1 className={headerStyles.logo}>Class-Component</h1>
        <form action="" method="post" onSubmit={this.submitHandle}>
          <Input {...inputProps}/>
            <Button type="submit">Enter</Button>
          </form>
      </header>
    )
  }
}

export default Header;