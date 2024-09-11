export default function ErrorMessageComponent({
  message,
}: {
  message: string;
}) {
  return <p style={{ color: "red", marginTop: ".5rem" }}>{message}</p>;
}
