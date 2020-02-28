import React from "react";
import { Icon, Modal} from "antd";
import styled from "styled-components/macro";
import {WrappedRegistrationForm} from "./RegistrationForm";



export const Registration = () => {
    const renderLink = (): JSX.Element => {
        return (
            <a href={"#"}>
                <Icon type="left"/> На главную
            </a>
        );
    };
    return (

            <MainBlock>
                <ModalBlock
                    visible={true}
                    title={renderLink()}
                    onOk={() => {
                    }}
                    onCancel={() => {
                    }}
                    footer={
                        <p>
                            Авторизуясь, вы соглашаетесь с{" "}
                            <a href={"#"}>правилами пользования сайтом</a> и даете{" "}
                            <a href={"#"}>согласие на обработку персональных данных.</a>
                        </p>
                    }
                >
                    <div>
                        <ModalBodyHeader>Регистрация через почту</ModalBodyHeader>
                        <ModalBodyText>
                            или <a href={"#"}>войти в аккаунт</a>
                        </ModalBodyText>
                    </div>
                    <WrappedRegistrationForm/>
                </ModalBlock>
            </MainBlock>

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
  .ant-modal-header,
  .ant-modal-footer {
    border: none;
  }
  .ant-modal-body {
    padding: 16px;
  }
  .ant-modal-header a {
    font-family: SF Pro Display, serif;
    line-height: 24px;
    color: #262626;
    text-decoration: none;
  }
  .ant-modal-footer {
    text-align: left;
    font-family: SF Pro Display, serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #8c8c8c;
  }
  a {
    text-decoration: underline;
    color: #1c8efb;
  }
`;

const ModalBodyText = styled.p`
  font-family: SF Pro Display, serif;
  font-size: 14px;
  line-height: 22px;
  color: #595959;
`;
const ModalBodyHeader = styled.p`
  font-family: SF Pro Display, serif;
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  margin: 0;
`;
