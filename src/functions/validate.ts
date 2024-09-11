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
