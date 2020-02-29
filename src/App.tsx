import React from "react";
import { Header } from "./components/header/Header";
import styled from "styled-components/macro";
import ProtectedRoute, {
  ProtectedRouteProps
} from "./components/ProtectedRoutes";
import { useSessionContext } from "./core/context/SessionContext";
import { Route, Switch } from "react-router";
import { SignIn } from "./components/signin/SignIn";
import { MainPage } from "./components/MainPage";
import { Profile } from "./components/profile/Profile";
import { iconsPaths } from "./core/iconsPaths";
import { EventComp } from "./components/event/Event";

export const App = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPathOnAuthentication = (path: string) => {
    updateSessionContext({
      ...sessionContext,
      redirectPathOnAuthentication: path
    });
  };

  console.log("sessionContext.isAuthenticated", sessionContext.isAuthenticated);

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPathOnAuthentication:
      sessionContext.redirectPathOnAuthentication || "",
    setRedirectPathOnAuthentication
  };

  return (
    <Main className="App">
      <Header />
      <Content>
        <Switch>
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            redirectPathOnAuthentication="/"
            exact
            path="/"
            component={MainPage}
          />
          <Route path="/event/:id" component={EventComp} />

          <Route path="/profile">
            <Profile
              userImage={iconsPaths.userPic}
              userName="Вадим Зожный"
              weight={80}
              height={177}
              age={30}
            />
          </Route>
          <Route path="/login/:token" component={SignIn} />
          <Route path="/login/" component={SignIn} />
        </Switch>
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
