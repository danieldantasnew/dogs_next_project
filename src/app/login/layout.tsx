import styles from "./loginPage.module.css";
import Image from "next/image";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.loginPage}>
      <section>
        <Image
          src={"/assets/login.jpg"}
          alt="Imagem de um cachorro com gorro amarelo"
          width={600}
          height={600}
        />
      </section>
      <section style={{ maxWidth: "480px" }}>{children}</section>
    </main>
  );
}
