import React from "react";
import { Header } from "./components/header/Header";
import styled from "styled-components/macro";
import ProtectedRoute, {
  ProtectedRouteProps
} from "./components/ProtectedRoutes";
import { useSessionContext } from "./core/context/SessionContext";
import { EventsPage } from "./components/EventsPage";

export const App = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPathOnAuthentication = (path: string) => {
    updateSessionContext({
      ...sessionContext,
      redirectPathOnAuthentication: path
    });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: true, //!!sessionContext.isAuthenticated
    authenticationPath: "/login",
    redirectPathOnAuthentication:
      sessionContext.redirectPathOnAuthentication || "/",
    setRedirectPathOnAuthentication
  };

  return (
    <Main className="App">
      <Header />
      <Content>
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          exact={true}
          path="/"
          component={EventsPage}
        />
      </Content>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 auto;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 0 0 auto;
`;
