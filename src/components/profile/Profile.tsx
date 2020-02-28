import React, {FC} from "react";
import {Tabs} from "antd";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import {MainInformation} from "./MainInformation";

interface IProps {
    userImage: string;
    userName: string;
}

export const Profile: FC<IProps> = ({userImage, userName}) => {
    const {TabPane} = Tabs;

    return (
        <MainContainer>
            <BootstrapContainer>
                <UserBlock>
                    <UserPicture src={userImage} alt={""}/>
                    <UserNameLabel>{userName}</UserNameLabel>
                </UserBlock>
            </BootstrapContainer>
            <MyTabs defaultActiveKey="1" size={"large"}>
                <TabPane tab="Основные" key="1">
                    <GrayLine/>
                    <MainInformation/>
                </TabPane>
                <TabPane tab="Карточка участника" key="2" style={{width: 174}}>
                    Content of Tab Pane 2
                </TabPane>
            </MyTabs>
        </MainContainer>
    );
};

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
`;

const GrayLine = styled.div`
  height: 16px;
  width: 100vw;
  background: #e5e5e5;
`;
