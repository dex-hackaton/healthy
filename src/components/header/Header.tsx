import React from "react";
import { BootstrapContainer } from "../ui/BootstrapContainer";
import styled from "styled-components/macro";
import { iconsPaths } from "../../core/iconsPaths";

export const Header = () => {
  return (
    <HeadContainer>
      <BootstrapContainer>
        <MainBlock>
          <LeftBlock>
            <IconImage src={iconsPaths.menu} alt="" />
            <IconImage src={iconsPaths.logo} alt="" />
          </LeftBlock>
          <RightBlock>
            <IconImage src={iconsPaths.search} alt="" />
            <IconImage src={iconsPaths.notification} alt="" />
            <IconImage src={iconsPaths.profile} alt="" />
          </RightBlock>
        </MainBlock>
      </BootstrapContainer>
    </HeadContainer>
  );
};

const HeadContainer = styled.header`
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
