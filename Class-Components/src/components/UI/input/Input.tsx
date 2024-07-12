import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={styles.input} onChange={props.onChange}/>
    )
}

export default Input;