import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Hat, Logo } from "./main-header.style";
import { landing } from "../../../assets/images";
import Nav from "../main-header-nav/main-header-nav";
import Login from "../main-login/Login";
import BackgroundOverlay from "../main-header/BackgroundOverlay";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const handleClose = () => {
    setIsLoginVisible(false);
  };

  return (
    <ThemeProvider theme={{ showOverlay: isLoginVisible }}>
        <Hat>
          <Logo src={landing["logo1"]} alt="Логотип School Stage" />
          <Nav onLoginClick={handleLoginClick} />
        </Hat>
        <BackgroundOverlay show={isLoginVisible} />
        <Login show={isLoginVisible} onClose={handleClose} />
    </ThemeProvider>
  );
};
