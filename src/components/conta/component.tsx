"use client";

import Adicionar from "@/components/svgs/adicionar/adicionar";
import Estatisticas from "@/components/svgs/estatisticas/estatisticas";
import Feed from "@/components/svgs/feed/feed";
import Sair from "@/components/svgs/sair/sair";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./contaHeader.module.css";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta":
      return "Minha Conta";
    case "/conta/estatisticas":
      return "Estatísticas";
    case "/conta/postar":
      return "Postar";
    default:
      return "Minha Conta";
  }
}

export default function ContaComponent() {
  const pathname = usePathname();

  React.useEffect(() => {}, [pathname]);

  return (
    <div className={`${styles.conta} flex-row`}>
      <h1>{getTitle(pathname)}</h1>
      <nav>
        <ul className={`${styles.lista} flex-row`}>
          <li>
            <Link
              href={"/conta"}
              className={pathname === "/conta" ? "active" : ""}>
              <Feed />
            </Link>
          </li>
          <li>
            <Link
              href={"/conta/estatisticas"}
              className={pathname === "/conta/estatisticas" ? "active" : ""}>
              <Estatisticas />
            </Link>
          </li>
          <li>
            <Link
              href={"/conta/postar"}
              className={pathname === "/conta/postar" ? "active" : ""}>
              <Adicionar />
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <Sair />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
