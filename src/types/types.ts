export type Photos = {
  id: number;
  autor: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

export type TokenPost = {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};

export type UserGet = {
  id: number;
  username: string;
  nome: string;
  email: string;
};
