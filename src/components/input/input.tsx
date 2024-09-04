import styles from "./input.module.css";

type InputType = React.ComponentProps<"input"> & {
  name: string;
};

export default function Input({ name, ...props }: InputType) {
  return (
    <div className={`${styles.inputWrapper} flex-column`}>
      <label style={{ paddingBottom: ".5rem" }} htmlFor={name}>
        {name}
      </label>
      <input id={name} name={name} {...props} />
    </div>
  );
}
