import { createContext, useContext, useState } from "react";
import React from "react";

export interface Session {
  isAuthenticated: boolean;
  redirectPathOnAuthentication?: string;
}

export const initialSession: Session = {
  isAuthenticated: !!localStorage.getItem("token")
};

export const SessionContext = createContext<
  [Session, (session: Session) => void]
>([initialSession, () => {}]);
export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider: React.FC = props => {
  const [sessionState, setSessionState] = useState(initialSession);
  const defaultSessionContext: [Session, typeof setSessionState] = [
    sessionState,
    setSessionState
  ];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {props.children}
    </SessionContext.Provider>
  );
};