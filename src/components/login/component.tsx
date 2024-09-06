"use client";

import Link from "next/link";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./login.module.css";
import ActionsSetCookies from "@/actions/setToken";
import ActionsUserGet from "@/actions/userGet";
import { useContextUser } from "@/context/user-context";

export default function LoginComponent() {
  const { setUser } = useContextUser();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.Usuário.value;
    const password = event.currentTarget.Senha.value;

    const response = await ActionsSetCookies(username, password);
    if (response.autorizado) {
      const resp = await ActionsUserGet();
      setUser(resp);
      window.location.href = "/conta";
    }
  }

  return (
    <div className={`${styles.login} animationToRight`}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input name="Usuário" type="text" />
        <Input name="Senha" type="password" />
        <Button name="Entrar" aria-label="Botão para realizar o login" />
      </form>
      <Link href={"/login/perdeu"}>Perdeu a senha?</Link>
      <div className={`${styles.cadastro} flex-column`}>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href={"/login/cadastro"} className="button">
          Cadastro
        </Link>
      </div>
    </div>
  );
}
