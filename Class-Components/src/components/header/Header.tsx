import { ChangeEvent, FormEvent, useState } from "react";
import headerStyles from "./Header.module.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { getLocalData, setLocalData } from "../../utils/localStorageManage";
import { validateWord } from "../../utils/validation";

interface HeaderProps {
  changeRequestWord: (word: string) => void,
}

function Header(props: HeaderProps) {
  const [inputWord, setInputWord] = useState(getLocalData() || '');

  const changeHandle = (e: ChangeEvent): void => {
    setInputWord((e.target as HTMLInputElement).value);
  }

  const submitHandle = (e: FormEvent): void => {
    e.preventDefault();
    const validWord = validateWord(inputWord);
    setLocalData(validWord);
    props.changeRequestWord(validWord);
  }

  const inputProps = {
    type: "text",
    placeholder: "Search",
    value: inputWord,
    onChange: changeHandle
  }

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.logo}>Class-Component</h1>
      <form action="" method="post" onSubmit={submitHandle}>
        <Input {...inputProps}/>
        <Button type="submit">Enter</Button>
      </form>
    </header>
  )
}

export default Header;