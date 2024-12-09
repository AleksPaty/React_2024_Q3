import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import headerStyles from "./Header.module.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { useLocalStore } from "../../hooks/useLocalStore";
import { Form, useNavigate, useSubmit } from "react-router-dom";
import { validateWord } from "../../utils/validation";

function Header() {
  const [requestWord, setWord] = useLocalStore('');
  const [inputWord, setInputWord] = useState(requestWord || '');
  const navigate = useNavigate();
  const submit = useSubmit();
  const form = useRef(null);

  useEffect(() => {
    if(requestWord) submit(form.current);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const changeHandle = (e: ChangeEvent): void => {
    setInputWord((e.target as HTMLInputElement).value)
  }

  const submitHandle = (e: FormEvent): void => {
    e.preventDefault();
    const validWord = validateWord(inputWord);
    setWord(validWord);

    if (!inputWord) {
      navigate('/');
      return;
    };
    submit(e.currentTarget as HTMLFormElement);
  }

  const inputProps = {
    type: "text",
    placeholder: "Search",
    value: inputWord,
    onChange: changeHandle,
    name: 'search'
  }

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.logo}>Genshin-Impact</h1>
      <Form role="search" ref={form} onSubmit={submitHandle}>
        <Input inputProps={inputProps}/>
        <Button style={headerStyles.button} type="submit">Enter</Button>
      </Form>
    </header>
  )
}

export default Header;