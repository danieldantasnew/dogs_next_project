import Link from "next/link";
import styles from "./header.module.css";
import SvgsUsuario from "../svgs/usuario/Usuario";
import Dogs from "../svgs/dogs/dogs";

export default function Header() {
  return (
    <header className={`${styles.header} flex-row`}>
      <div className={`${styles.containerHeader} flex-row content-space`}>
        <Link href={"/"}>
          <Dogs />
        </Link>
        <Link href={"/login"} className={`${styles.login} flex-row`}>
          <p>Login / Criar</p>
          <SvgsUsuario />
        </Link>
      </div>
    </header>
  );
}
