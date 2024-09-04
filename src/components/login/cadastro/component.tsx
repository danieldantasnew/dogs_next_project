"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./cadastro.module.css";

export default function CadastroComponent() {
  return (
    <form className={`${styles.cadastro} animationToRight`}>
      <h1>Cadastre-se</h1>
      <Input name="Usuário" />
      <Input name="Email" />
      <Input name="Senha" type="password" />
      <Button name="Cadastrar" />
    </form>
  );
}
