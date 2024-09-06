"use client";

import { UserGet } from "@/types/types";
import React from "react";

type ContextType = {
  user: UserGet | null;
  setUser: React.Dispatch<React.SetStateAction<UserGet | null>>;
};

const context = React.createContext<ContextType | null>(null);

export function useContextUser() {
  const userContext = React.useContext(context);

  if (userContext === null)
    throw new Error("O contexto deve ser passado dentro do Provider");

  return userContext;
}

export function MyApp({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserGet | null;
}) {
  const [userState, setUserState] = React.useState(user);
  return (
    <context.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </context.Provider>
  );
}
