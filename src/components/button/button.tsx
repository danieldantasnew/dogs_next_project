type ButtonType = React.ComponentProps<"button">;

export default function Button({ children, disabled, ...props }: ButtonType) {
  return (
    <button
      disabled={disabled}
      className={`button ${disabled ? "buttonDisabled" : ""}`}
      {...props}>
      {children}
    </button>
  );
}
