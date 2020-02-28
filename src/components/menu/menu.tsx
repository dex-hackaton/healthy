import React, {createRef, FC, useEffect} from "react";
import styled, {css} from "styled-components";
import {MenuLinks} from "../../core/menuLinks";
import {Link, useLocation} from "react-router-dom";
import {clearAllBodyScrollLocks, disableBodyScroll} from "body-scroll-lock";
import {Button} from "antd";

interface IProps {
    menuHandler: () => void;
}

export const Menu: FC<IProps> = ({menuHandler}) => {
    const location = useLocation();
    const refElement = createRef<HTMLDivElement>();

    useEffect(() => {
        refElement.current && disableBodyScroll(refElement.current);
        return () => clearAllBodyScrollLocks();
    });

    return (
        <MenuContainer ref={refElement}>
            <Contained onClick={menuHandler}>
                <MenuItemsContainer onClick={e => e.stopPropagation()}>
                    {MenuLinks.map((link, index) => (
                        <MenuItemBlock
                            key={index + link.name}
                            onClick={menuHandler}
                            isActive={location.pathname === link.path}
                        >
                            <MenuItem to={link.path}>{link.name}</MenuItem>
                        </MenuItemBlock>
                    ))}
                    <MyButton type="primary">Создать мероприятие </MyButton>
                </MenuItemsContainer>
            </Contained>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
  position: relative;
`;

const Contained = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(38, 38, 38, 0.7);

  position: absolute;
  top: 13px;
  left: -15px;
`;

const MenuItemsContainer = styled.div`
  background: #f5f5f5;
  width: 80vw;

  height: 100vh;
`;

const MenuItemBlock = styled.div<{ isActive: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? "#FFFFFF" : "#F5F5F5")};
  ${props =>
    props.isActive
      ? css`
          padding-left: 16px;
        `
      : css`
          margin-left: 16px;
        `};
  border-bottom: 1px solid #e8e8e8;
`;

const MenuItem = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-decoration: none;
`;

const MyButton = styled(Button)`
  margin-left: 16px;
  margin-top: 11px;
  width: 229px;
  height: 44px;
  background: #bae7ff;
  border-radius: 4px;
  border: none;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
`;
