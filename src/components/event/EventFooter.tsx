import React from "react";
import {BootstrapContainer} from "../ui/BootstrapContainer"
import styled from "styled-components";
import {Button, Icon } from "antd";

interface Type {
    id: string,
    name:string
}
interface Props {
    type: Type,
    isCheck: boolean
}

export const EventFooter: React.FC<Props> = ({type, isCheck}) => {
    return (
        <BootstrapContainer>
            <MainBlock>
                <img src={type.id} alt={type.id}/>
                <span>{type.name}</span>
                <Button block size={"large"}>
                   { isCheck ? "Покинуть" : "Вступить" }
                </Button>
                <Button block size={"large"}>
                    <Icon type="message" />
                </Button>
            </MainBlock>
        </BootstrapContainer>
    );
};

const MainBlock = styled.div`
    color: #595959;
    font-family: SF Pro Display;
`;
