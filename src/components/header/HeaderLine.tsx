import React, {FC} from "react";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import styled from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import {Menu} from "../menu/menu";

interface IProps {
  setMenu: () => void;
  menu: boolean;
  closeMenu: () => void;
}

export const HeaderLine: FC<IProps> = ({setMenu, menu, closeMenu}) => {
  return (
      <HeadBlock>
        <BootstrapContainer>
          <MainBlock>
            <LeftBlock>
              <ImageBlock>
                <IconImage onClick={setMenu} src={iconsPaths.menu} alt=""/>
                {menu ? <Menu menuHandler={closeMenu}/> : null}
              </ImageBlock>
              <IconImage src={iconsPaths.logo} alt=""/>
            </LeftBlock>
            <RightBlock>
              <IconImage src={iconsPaths.search} alt=""/>
              <IconImage src={iconsPaths.notification} alt=""/>
              <IconImage src={iconsPaths.profile} alt=""/>
            </RightBlock>
          </MainBlock>
        </BootstrapContainer>
      </HeadBlock>
  );
};

const HeadBlock = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: #bae7ff;
`;

const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  > :first-child {
    padding-right: 16px;
  }
`;
const RightBlock = styled.div`
  display: flex;
  align-items: center;
  > :nth-child(2) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const IconImage = styled.img``;

const ImageBlock = styled.div``;
