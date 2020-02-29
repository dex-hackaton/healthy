import React from "react";
import {BootstrapContainer} from "../ui/BootstrapContainer"
import styled from "styled-components";
import {Button, Icon } from "antd";
import {useHistory} from "react-router";

interface Type {
    id: string,
    name:string
}
interface Props {
    type: Type,
    isCheck: boolean,
    id: string
}

export const EventFooter: React.FC<Props> = ({type, isCheck,id}) => {
    const history = useHistory();

    return (
        <BootstrapContainer>
            <MainBlock>
                <div>
                    <MyIcon src={`/categories/${type.id}.svg`}/>
                    <span>{type.name}</span>
                </div>
                <div>
                    <BlueButton size={"large"} isgo={isCheck.toString()}  onClick={() => history.push(`/event/${id}`)}>
                       { isCheck ? "Покинуть" : "Вступить" }
                    </BlueButton>
                    <Button size={"large"}>
                        <Icon type="message" />
                    </Button>
                </div>
            </MainBlock>
        </BootstrapContainer>
    );
};

const MainBlock = styled.div`
    color: #595959;
    font-family: SF Pro Display;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    button + button {
        margin-left: 21px;
        border-radius: 50%;
        padding: 0 11px;
    }
`;
const MyIcon = styled.img`
  margin-left: 16px;
  margin-right: 10px;
`;

const BlueButton = styled(Button)<{ isgo: string }>`
     background-color: ${props => (props.isgo === "true" ? "transparent" : "#BAE7FF")};
`;

