import React from "react";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import { WrappedSettingForm } from "./SettingForm";

export const Settings = () => {
    return (
        <MainContainer>
            <BootstrapContainer>
                <WrappedSettingForm />
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
`;
