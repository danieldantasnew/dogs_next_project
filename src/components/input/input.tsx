import React from "react";
import styles from "./input.module.css";

type InputType = React.ComponentProps<"input"> & {
  name: string;
  erro: string | null;
  dado: string;
};

export default function Input({
  name,
  erro,
  onChange,
  onBlur,
  dado,
  ...props
}: InputType) {
  return (
    <div className={`${styles.inputWrapper} flex-column`}>
      <label style={{ paddingBottom: ".5rem" }} htmlFor={name}>
        {name}
      </label>
      <input
        id={name}
        name={name}
        value={dado}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {erro && <p className={styles.erro}>{erro}</p>}
    </div>
  );
}
