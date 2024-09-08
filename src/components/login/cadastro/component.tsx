"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./cadastro.module.css";
import { useForm } from "@/hooks/useForm";

export default function CadastroComponent() {
  const username = useForm("");
  const email = useForm("email");
  const password = useForm("password");
  return (
    <form className={`${styles.cadastro} animationToRight`}>
      <h1>Cadastre-se</h1>
      <Input
        name="Usuário"
        type="text"
        onChange={username.handleChange}
        onBlur={username.onBlur}
        erro={username.erro}
        dado={username.dado}
      />
      <Input
        name="Email"
        type="email"
        onChange={email.handleChange}
        onBlur={email.onBlur}
        erro={email.erro}
        dado={email.dado}
      />
      <Input
        name="Senha"
        type="password"
        onChange={password.handleChange}
        onBlur={password.onBlur}
        erro={password.erro}
        dado={password.dado}
      />
      <Button name="Cadastrar" />
    </form>
  );
}
