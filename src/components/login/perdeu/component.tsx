"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./perdeu.module.css";
import { useFormState, useFormStatus } from "react-dom";
import LostPassword from "@/actions/lostPassword";
import ErrorMessageComponent from "@/components/errorMessage/component";
import React from "react";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando Email...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function PerdeuComponent() {
  const [state, action] = useFormState(
    async (state: {}, formData: FormData) => {
      const urlBase = window.location.href.replace("perdeu", "reset");
      formData.append("url", urlBase);

      return await LostPassword(state, formData);
    },
    {
      data: null,
      error: "",
      ok: false,
    }
  );

  React.useEffect(() => {
    if (state.ok) {
      setTimeout(() => {
        window.location.href = "/login";
      }, 4000);
    }
  }, [state]);

  return (
    <form action={action} className={`${styles.perdeu} animationToRight`}>
      <h1>Perdeu a senha?</h1>
      <Input name="login" nameView="Email / Usuário" type="text" />

      {state.error && <ErrorMessageComponent message={state.error} />}
      {state.data ? (
        <p style={{ color: "green", marginTop: ".5rem" }}>{state.data}</p>
      ) : (
        <Submit />
      )}
    </form>
  );
}
