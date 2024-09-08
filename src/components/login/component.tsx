"use client";

import Link from "next/link";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./login.module.css";
import ActionsSetCookies from "@/actions/setToken";
import ActionsUserGet from "@/actions/userGet";
import { useContextUser } from "@/context/user-context";
import { useForm } from "@/hooks/useForm";
import React from "react";

export default function LoginComponent() {
  const { setUser } = useContextUser();
  const username = useForm("");
  const password = useForm("");
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const response = await ActionsSetCookies(username.dado, password.dado);
      if (response.autorizado) {
        const resp = await ActionsUserGet();
        setUser(resp);
        window.location.href = "/conta";
      } else {
        setError(response.erro);
        setTimeout(() => setError(null), 4000);
      }
    }
  }

  return (
    <div className={`${styles.login} animationToRight`}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          name="Usuário"
          type="text"
          onChange={username.handleChange}
          onBlur={username.onBlur}
          erro={username.erro}
          dado={username.dado}
        />
        <Input
          name="Senha"
          type="password"
          onChange={password.handleChange}
          onBlur={password.onBlur}
          erro={password.erro}
          dado={password.dado}
        />
        <Button name="Entrar" aria-label="Botão para realizar o login" />
        {error && (
          <p
            style={{
              marginTop: ".5rem",
              color: "red",
            }}>
            {error}
          </p>
        )}
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
