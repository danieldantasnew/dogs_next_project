"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from "./perdeu.module.css";
import { useForm } from "@/hooks/useForm";

export default function PerdeuComponent() {
  const perdeu = useForm("");
  return (
    <form className={`${styles.perdeu} animationToRight`}>
      <h1>Perdeu a senha?</h1>
      <Input
        name="Email / Usuário"
        type="text"
        onChange={perdeu.handleChange}
        onBlur={perdeu.onBlur}
        erro={perdeu.erro}
        dado={perdeu.dado}
      />
      <Button name="Enviar Email" />
    </form>
  );
}
