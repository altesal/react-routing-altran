import React from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [state, setState] = React.useState(getLocalUser());
  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  return context;
}

function getLocalUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user : { email: "", isLoggedIn: false };
}
