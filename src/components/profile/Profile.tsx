import React, {FC} from "react";
import {Tabs} from "antd";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import {MainInformation} from "./MainInformation";
import {Settings} from "./Settings";
import {iconsPaths} from "../../core/iconsPaths";

interface IProps {
    userImage: string;
    userName: string;
    weight: number;
    height: number;
    age: number;
}

export const Profile: FC<IProps> = ({userImage, userName, weight, height, age }) => {
    const {TabPane} = Tabs;
    console.log("test");
    return (
        <MainContainer>
            <BootstrapContainer>
                <UserBlock>
                    <UserPicture src={userImage} alt={""}/>
                    <UserNameLabel>{userName}</UserNameLabel>
                </UserBlock>
                <UserParametrs>
                    <IconImage src={iconsPaths.weight} alt=""/><span>{weight} кг</span>
                    <IconImage src={iconsPaths.height} alt=""/><span>{height} см</span>
                    <IconImage src={iconsPaths.calendar} alt=""/><span>{age} лет</span>
                </UserParametrs>
            </BootstrapContainer>
            <MyTabs defaultActiveKey="1" size={"large"}>
                <TabPane tab="Основные" key="1" style={{backgroundColor: "#e5e5e5"}}>
                    <GrayLine/>
                    <MainInformation indexBody={19.8} needWeight={91} goal={"Набрать вес"} energy={2540}/>
                </TabPane>
                <TabPane tab="Настройки" key="2" style={ {width: "100%"}}>
                    <GrayLine/>
                    <Settings />
                </TabPane>
            </MyTabs>
        </MainContainer>
    );
};

const UserParametrs = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    img {
        margin-right: 8px;
    }
    span {
        font-size: 14px;
        line-height: 22px;
        color: #000000;
         margin-right: 20px;
    }
`;

const MyTabs = styled(Tabs)`
  font-family: SF Pro Display, serif;
  font-style: normal;
  font-weight: 600 !important;
  font-size: 16px;
  line-height: 24px;

  .ant-tabs-nav .ant-tabs-tab-active {
    font-weight: 600;
  }
  .ant-tabs-bar {
    border-bottom: none;
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    font-weight: normal;
  }
`;

const UserPicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 24px;
`;

const UserNameLabel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 0;
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
`;

const GrayLine = styled.div`
  height: 16px;
  width: 100vw;
  background: #e5e5e5;
`;
const IconImage = styled.img``;
