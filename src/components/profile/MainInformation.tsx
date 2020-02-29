import React from "react";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import {iconsPaths} from "../../core/iconsPaths";
import fire from "../../assets/icons/fire.svg";

interface Props {
    indexBody: number;
    needWeight: number;
    goal: string;
    energy: number;
}

export const MainInformation: React.FC<Props> = ({indexBody, needWeight,goal, energy }) => {
    return (
        <MainContainer>
            <BootstrapContainer>
                <InfoBlock>
                    <InfoItem>
                        <IconImage src={iconsPaths.height} alt=""/>
                        <span>Индекс массы тела</span>
                        <DataBlock>
                            {indexBody}
                        </DataBlock>
                    </InfoItem>
                    <InfoItem>
                        <IconImage src={iconsPaths.weight} alt=""/><span>Цель: {goal}</span>
                        <DataBlock>
                            {needWeight} кг
                        </DataBlock>
                    </InfoItem>
                    <InfoItem>
                        <IconImage src={iconsPaths.fire} alt=""/><span>Энергозатраты</span>
                        <DataBlock>
                            {energy} Ккал
                        </DataBlock>
                    </InfoItem>
                </InfoBlock>
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

const InfoBlock = styled.div`
    margin: 16px 0;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #595959;
    }
`;
const InfoItem = styled.div`
    margin-bottom: 16px;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

const DataBlock = styled.div`
    float: right;
    font-weight: 600;
    color: #262626;
`;

const IconImage = styled.img`
    margin-right: 8px;
`;