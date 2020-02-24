import React from "react";
import {Button, Modal, Icon, } from "antd";
import styled from "styled-components/macro";
import { iconsPaths } from "../../core/iconsPaths";
import { WrappedLoginForm } from "./LoginForm";
import { WrappedRegistrationForm } from "./RegistrationForm";

interface Props {
    visible: boolean;
}

export const SignIn: React.FC<Props> = props => {
    const { visible = false } = props;
    const renderLink = (): JSX.Element => {
        return (
            <a href={"#"}><Icon type="left" /> На главную</a>
        )
    };
    return (
        <>
            <MainBlock>
                <ModalBlock
                    visible={false}
                    title="Вход на портал"
                    onOk={()=> {}}
                    onCancel={()=> {}}
                    footer={
                        <p>
                            Авторизуясь, вы соглашаетесь с <a href={"#"}>правилами пользования сайтом</a> и даете <a href={"#"}>согласие на обработку персональных данных.</a>
                        </p>
                    }
                >
                    <Buttons>
                        <Button block size={"large"}><IconImage src={iconsPaths.vk} alt="" />Vkontakte</Button>
                        <Button block size={"large"}><IconImage src={iconsPaths.facebook} alt="" />Facebook</Button>
                        <Button block size={"large"}><IconImage src={iconsPaths.mail} alt="" />Через почту</Button>
                    </Buttons>
                </ModalBlock>
            </MainBlock>

            <MainBlock>
                <ModalBlock
                    visible={false}
                    title={renderLink()}
                    onOk={()=> {}}
                    onCancel={()=> {}}
                    footer={
                        <p>
                            Авторизуясь, вы соглашаетесь с <a href={"#"}>правилами пользования сайтом</a> и даете <a href={"#"}>согласие на обработку персональных данных.</a>
                        </p>
                    }
                >
                    <div>
                        <ModalBodyHeader>Вход через почту</ModalBodyHeader>
                        <ModalBodyText>или <a href={"#"}>зарегистрироваться</a></ModalBodyText>
                    </div>
                <WrappedLoginForm />
                </ModalBlock>
            </MainBlock>

            <MainBlock>
                <ModalBlock
                    visible={visible}
                    title={renderLink()}
                    onOk={()=> {}}
                    onCancel={()=> {}}
                    footer={
                        <p>
                            Авторизуясь, вы соглашаетесь с <a href={"#"}>правилами пользования сайтом</a> и даете <a href={"#"}>согласие на обработку персональных данных.</a>
                        </p>
                    }
                >
                    <div>
                        <ModalBodyHeader>Регистрация через почту</ModalBodyHeader>
                        <ModalBodyText>или <a href={"#"}>войти в аккаунт</a></ModalBodyText>
                    </div>
                    <WrappedRegistrationForm />
                </ModalBlock>
            </MainBlock>
        </>
    );


};

const MainBlock = styled.div`  
  > .ant-modal-header {
    border: none;
  } 
`;
const ModalBlock = styled(Modal)`
    margin: auto 16px;
    width: initial !important;
    color: #262626;    
    .ant-modal-header, .ant-modal-footer {
        border: none;
    }
    .ant-modal-body {
        padding: 16px;
    }
    .ant-modal-header a{
        font-family: SF Pro Display;
        line-height: 24px;
        color: #262626; 
        text-decoration: none;   
    }
    .ant-modal-footer {
        text-align: left;
        font-family: SF Pro Display;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: #8C8C8C;       
    }
    a {
        text-decoration: underline;
        color: #1c8efb;
    }
`;
const Buttons = styled.div`
> button {
    margin-bottom: 12px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        font-family: "SF Pro Display";
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.41px;
        color: #595959;
    }
    > img {
        position: absolute;
        left: 16px;
    }
  }
`;
const ModalBodyText = styled.p`
    font-family: SF Pro Display;
    font-size: 14px;
    line-height: 22px;
    color: #595959;
`;
const ModalBodyHeader = styled.p`
    font-family: SF Pro Display;
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;
    margin: 0;
`;

const IconImage = styled.img``;
