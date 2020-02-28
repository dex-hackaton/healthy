import React from "react";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";

export const MainInformation = () => {
    return (
        <MainContainer>
            <BootstrapContainer>
                <Title>Основная информация</Title>
            </BootstrapContainer>
        </MainContainer>
    );
};

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0 0;

  color: #8c8c8c;
`;

const MainContainer = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;
