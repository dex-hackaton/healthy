/* eslint-disable react/prop-types */
import React from "react";
import 'antd/dist/antd.css';
import { Button, Modal } from "antd";
import styled from "styled-components/macro";
import { iconsPaths } from "../../core/iconsPaths";

interface Props {
    visible: boolean;
}

export const SignIn: React.FC<Props> = props => {
    const { visible = false } = props;
    return (
        <MainBlock>
            <ModalBlock
                visible={visible}
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
    );
};

const MainBlock = styled.div`
    backfround-color: blue;
  > .ant-modal-header {
    border: none;
  }
`;
const ModalBlock = styled(Modal)`
    margin: auto 16px;
    width: initial !important;
    .ant-modal-header, .ant-modal-footer {
        border: none;
    }
    .ant-modal-footer {
        text-align: left;
        font-family: SF Pro Display;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: #8C8C8C;
        a {
            text-decoration: underline;
            color: #1c8efb;
        }
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

const IconImage = styled.img``;
