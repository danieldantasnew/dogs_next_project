"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./perdeu.module.css";

export default function PerdeuComponent() {
  return (
    <form className={`${styles.perdeu} animationToRight`}>
      <h1>Perdeu a senha?</h1>
      <Input name="Email / Usuário" />
      <Button name="Enviar Email" />
    </form>
  );
}
