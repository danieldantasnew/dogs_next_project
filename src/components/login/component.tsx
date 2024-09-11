"use client";

import Link from "next/link";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./login.module.css";
import React from "react";
import ErrorMessageComponent from "../errorMessage/component";
import { useFormState, useFormStatus } from "react-dom";
import SignIn from "@/actions/signIn";
import { useContextUser } from "@/context/user-context";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending} aria-label="Botão para realizar o login">
          Entrando...
        </Button>
      ) : (
        <Button aria-label="Botão para realizar o login">Entrar</Button>
      )}
    </>
  );
}

export default function LoginComponent() {
  const { setUser } = useContextUser();

  const [state, action] = useFormState(SignIn, {
    data: null,
    ok: false,
    erro: "",
  });

  React.useEffect(() => {
    if (state.ok) {
      setUser(state.data);
      window.location.href = "/conta";
    }
  }, [state, setUser]);

  return (
    <div className={`${styles.login} animationToRight`}>
      <form action={action}>
        <h1>Login</h1>
        <Input name="username" nameView="Usuário" type="text" />
        <Input name="password" nameView="Senha" type="password" />
        <Submit />
        {state.erro && <ErrorMessageComponent message={state.erro} />}
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
