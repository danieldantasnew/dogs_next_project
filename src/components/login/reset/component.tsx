"use client";

import Reset from "@/actions/reset";
import Button from "@/components/button/button";
import ErrorMessageComponent from "@/components/errorMessage/component";
import Input from "@/components/input/input";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar</Button>
      )}
    </>
  );
}
export default function ResetComponent() {
  const [state, action] = useFormState(
    async (state: {}, formData: FormData) => {
      const queryParams = new URLSearchParams(window.location.search);
      const key = queryParams.get("key") as string | null;
      const login = queryParams.get("login") as string | null;

      if (key && login) {
        formData.append("key", key);
        formData.append("login", login);
      }

      return await Reset(state, formData);
    },
    {
      data: null,
      ok: false,
      erro: "",
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
    <form
      action={action}
      style={{ marginTop: "10rem" }}
      className={`animationToRight`}>
      <h1>Reset senha</h1>
      <Input name="password" nameView="Nova senha" type="password" />
      {state.ok ? (
        <p style={{ color: "green" }}>Senha alterada com sucesso!</p>
      ) : (
        <Submit />
      )}
      {state.erro && <ErrorMessageComponent message={state.erro} />}
    </form>
  );
}
