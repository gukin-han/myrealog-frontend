"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import * as utils from "@/utils/getCookieValue";

type UserData = {
  username: string;
  displayName: string;
  avatarUrl: string;
};

type AuthContextType = {
  state: {
    isAuthenticated: boolean;
    username: string;
    displayName: string;
    avatarUrl: string;
  };
  signin: (userData: UserData) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState({
    isAuthenticated: false,
    username: "",
    displayName: "",
    avatarUrl: "",
  });

  const signin = (userData: UserData) => {
    setState({
      isAuthenticated: true,
      ...userData,
    });
  };

  const signout = () => {
    setState({
      isAuthenticated: false,
      username: "",
      displayName: "",
      avatarUrl: "",
    });
  };

  const value: AuthContextType = {
    state,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "AuthProvider의 자식컴포넌트에서 useAuthContext를 사용해야합니다."
    );
  }
  return context;
};
