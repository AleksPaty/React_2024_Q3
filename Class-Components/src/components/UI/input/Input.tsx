import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: ChangeEvent) => void,
    name?: string
}

function Input({inputProps}: {inputProps: InputProps}) {
    return (
        <input {...inputProps} className={styles.input} onChange={inputProps.onChange}/>
    )
}

export default Input;