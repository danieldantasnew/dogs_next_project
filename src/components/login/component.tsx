"use client";

import Link from "next/link";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./login.module.css";

export default function LoginComponent() {
  return (
    <div className={`${styles.login} animationToRight`}>
      <form>
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
