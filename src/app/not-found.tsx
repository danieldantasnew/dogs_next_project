import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="flex-column" style={{ justifyContent: "flex-start" }}>
      <div style={{ marginTop: "12rem" }} className="content-space flex-column">
        <h1>Página não encontrada</h1>
        <Link href={"/"} style={{ textDecoration: "none" }} className="button">
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
