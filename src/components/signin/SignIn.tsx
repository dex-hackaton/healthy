import React, { useEffect } from "react";
import { Button, Modal } from "antd";
import styled from "styled-components/macro";
import { iconsPaths } from "../../core/iconsPaths";
import { useHistory, useParams } from "react-router";
import { BaseRequest } from "../../api/BaseRequest";
import { useSessionContext } from "../../core/context/SessionContext";

export const SignIn = () => {
  const { token } = useParams();
  const history = useHistory();
  const [sessionContext, updateSessionContext] = useSessionContext();

  useEffect(() => {
    if (typeof token !== "undefined") {
      console.log("it true");
      BaseRequest.setToken(token);
      updateSessionContext({
        isAuthenticated: true
      });
      history.push("/");
    } else if (sessionContext.isAuthenticated) {
      history.push("/");
    }
  });

  return (
    <MainBlock>
      <ModalBlock
        visible={true}
        title="Вход на портал"
        onOk={() => {}}
        onCancel={() => {}}
        footer={
          <p>
            Авторизуясь, вы соглашаетесь с{" "}
            <a href={"#"}>правилами пользования сайтом</a> и даете{" "}
            <a href={"#"}>согласие на обработку персональных данных.</a>
          </p>
        }
      >
        <Buttons>
          <Button block size={"large"}>
            <IconImage src={iconsPaths.vk} alt="" />
            Vkontakte
          </Button>
          <Button block size={"large"}>
            <IconImage src={iconsPaths.facebook} alt="" />
            Facebook
          </Button>
          <Button block size={"large"}>
            <IconImage src={iconsPaths.mail} alt="" />
            Через почту
          </Button>
        </Buttons>
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
const Buttons = styled.div`
  > button {
    margin-bottom: 12px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-family: "SF Pro Display", serif;
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
const IconImage = styled.img``;
