"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./cadastro.module.css";
import { useFormState, useFormStatus } from "react-dom";
import signUp from "@/actions/signUp";
import React from "react";
import { useContextUser } from "@/context/user-context";
import ErrorMessageComponent from "@/components/errorMessage/component";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function CadastroComponent() {
  const { setUser } = useContextUser();
  const [state, action] = useFormState(signUp, {
    data: null,
    erro: "",
    ok: false,
  });

  React.useEffect(() => {
    if (state.ok) {
      setUser(state.data);
      window.location.href = "/conta";
    }
  }, [state, setUser]);

  return (
    <form action={action} className={`${styles.cadastro} animationToRight`}>
      <h1>Cadastre-se</h1>
      <Input name="username" nameView="Usuário" type="text" />
      <Input name="email" nameView="Email" type="email" />
      <Input name="password" nameView="Senha" type="password" />
      <Submit />
      {state.erro && <ErrorMessageComponent message={state.erro} />}
    </form>
  );
}
