import React, {useState} from "react";
import {HeaderLine} from "./HeaderLine";
import styled from "styled-components";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
      <HeaderContainer>
        <HeaderLine setMenu={menuHandler} menu={menu} closeMenu={closeMenu}/>
      </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  flex-shrink: 0;
  z-index: 20;
  left: 0;
  top: 0;
  will-change: top;
  user-select: none;
  width: 100%;
  height: 50px;
`;
