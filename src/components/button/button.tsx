type ButtonType = React.ComponentProps<"button"> & {
  name: string;
};

export default function Button({ name, ...props }: ButtonType) {
  return (
    <button className="button" {...props}>
      {name}
    </button>
  );
}
