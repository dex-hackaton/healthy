import React from "react";
import {Header} from "./components/header/Header";
import styled from "styled-components/macro";
import ProtectedRoute, {ProtectedRouteProps} from "./components/ProtectedRoutes";
import {useSessionContext} from "./core/context/SessionContext";
import {Route} from "react-router";
import {SignIn} from "./components/signin/SignIn";
import {EventPage} from "./components/EventPage";
import {MainPage} from "./components/MainPage";
import {Profile} from "./components/profile/Profile";
import {iconsPaths} from "./core/iconsPaths";

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
      <Header/>
      <Content>
        <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path="/">
          <MainPage/>
        </ProtectedRoute>
        <ProtectedRoute {...defaultProtectedRouteProps} path="/event">
          <EventPage/>
        </ProtectedRoute>

        <ProtectedRoute {...defaultProtectedRouteProps} path="/profile">
          <Profile userImage={iconsPaths.userPic} userName="Вадим Зожный"/>
        </ProtectedRoute>
        <Route path="/login" component={SignIn}/>
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
