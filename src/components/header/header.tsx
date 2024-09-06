"use client";

import Link from "next/link";
import styles from "./header.module.css";
import SvgsUsuario from "../svgs/usuario/Usuario";
import Dogs from "../svgs/dogs/dogs";
import { useContextUser } from "@/context/user-context";
import React from "react";

export default function Header() {
  const { user } = useContextUser();
  const [nome, setNome] = React.useState("");

  React.useEffect(() => {
    if (user) {
      setNome(user.nome);
    }
  }, [user]);

  return (
    <header className={`${styles.header} flex-row`}>
      <div className={`${styles.containerHeader} flex-row content-space`}>
        <Link href={"/"}>
          <Dogs />
        </Link>
        {nome ? (
          <Link href={"/conta"} className={`${styles.login} flex-row`}>
            <p>{nome}</p>
            <SvgsUsuario />
          </Link>
        ) : (
          <Link href={"/login"} className={`${styles.login} flex-row`}>
            <p>Login / Criar</p>
            <SvgsUsuario />
          </Link>
        )}
      </div>
    </header>
  );
}
