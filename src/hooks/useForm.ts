import React from "react";

type Validate = {
  email: {
    regex: RegExp;
    message: string;
  };
  password: {
    regex: RegExp;
    message: string;
  };
};

type TypeValidate = "email" | "password" | "";

export const types: Validate = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Por favor, digite um e-mail válido!",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: "Digite letras e números.",
  },
};

export const useForm = (type: TypeValidate) => {
  const [dado, setDado] = React.useState("");
  const [erro, setErro] = React.useState<string | null>(null);

  function validate(dado: string) {
    if (dado.trim().length === 0) {
      setErro("Preencha um valor.");
      return false;
    } else if (
      (type === "email" || type === "password") &&
      types[type] &&
      !types[type].regex.test(dado)
    ) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (erro) validate(dado);
    setDado(target.value);
  }

  return {
    dado,
    setDado,
    erro,
    setErro,
    handleChange,
    validate: () => validate(dado),
    onBlur: () => validate(dado),
  };
};
