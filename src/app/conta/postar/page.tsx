import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Postar dog",
  description: "Poste a foto do seu cachorro",
};

export default async function PostarPage() {
  return (
    <main>
      <h1>Postar</h1>
    </main>
  );
}
