import React from "react";
import styles from "./input.module.css";

type InputType = React.ComponentProps<"input"> & {
  name: string;
  nameView: string;
};

export default function Input({ name, nameView, ...props }: InputType) {
  return (
    <div className={`${styles.inputWrapper} flex-column`}>
      <label style={{ paddingBottom: ".5rem" }} htmlFor={name}>
        {nameView}
      </label>
      <input id={name} name={name} {...props} />
    </div>
  );
}
