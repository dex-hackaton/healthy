import React from "react";
import {Button, Form, Input, Checkbox, Icon} from "antd";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";

const SettingForm = (props: any) => {
    const { getFieldDecorator } = props.form;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFields((err: boolean, values: string) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <>
        <Title>Основная информация</Title>
        <FormBox onSubmit={handleSubmit} className="login-form">
            <Form.Item label="Имя и фамилия">
                {getFieldDecorator('username')(
                    <Input
                        placeholder="Имя и фамилия"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Эл. почта">
                {getFieldDecorator('password')(
                    <Input
                        type="text"
                        placeholder="Электронная почта"
                    />,
                )}
            </Form.Item>
            <Line/>
            <SocialMedia>
                <Title>Мои соц. сети</Title>
                <SocialMediaDescriprion>Укажите никнейм, чтобы участники сервиса могли вас найти. </SocialMediaDescriprion>
                <Form.Item label="Telegram">
                    {getFieldDecorator('telegram')(
                        <Input
                            type="text"
                            placeholder="@"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Instagram">
                    {getFieldDecorator('instagram')(
                        <Input
                            type="text"
                            placeholder="@"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Vkontakte">
                    {getFieldDecorator('vkontakte')(
                        <Input
                            type="text"
                            placeholder="@"
                        />,
                    )}
                </Form.Item>
            </SocialMedia>
            <Line/>
            <NotificationBlock>

                <NotificationText>
                    <Title>Уведомления</Title>
                    <p>Вступление в мое событие</p>
                    <p>Сообщение в моем событии</p>
                    <p>Вступление в событие, в котором я</p>
                    <p>Сообщение в событии, в котором я</p>
                    <p>Новое рекомендуемое событие</p>
                    <p>Новая рекомендуемая статья</p>
                </NotificationText>

                <NotificationCheck>
                    <Title><Icon type="mail" /></Title>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                </NotificationCheck>

                <NotificationCheck>
                    <Title><Icon type="bell" /></Title>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                    <Checkbox/>
                </NotificationCheck>

            </NotificationBlock>
            <Line/>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Сохранить изменения
                </Button>
            </Form.Item>
        </FormBox>
            </>
    )
};


const FormBox = styled(Form)`  
    margin-top: 16px;   
    margin-bottom: 16px;   
    font-family: SF Pro Display;
    button {
        background-color: #BAE7FF;
        border: none;
        color: #262626;
    }
    .ant-row:last-child {
        margin: 0;
        a {
            float: right;
            color: #595959;
        }
    }
    .ant-form-item {
        margin-bottom: 10px;
    }
    label {
        font-size: 14px;
        line-height: 22px;
        font-style: normal;
        font-weight: normal;
        color: #595959;
    }
    input {
        color: #262626;
    }
`;
const Line = styled.hr`
 border-color: #fffefe;    
 margin: 20px -15px 15px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0 0;

  color: #8c8c8c;
`;


const SocialMedia = styled.div`
    p {
        
    }
`;
const SocialMediaDescriprion = styled.p`
        font-size: 14px;
        line-height: 22px;
        color: #8C8C8C;
         font-style: normal;
        font-weight: normal;
`;
const NotificationBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NotificationText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #262626;
    p {
        margin-bottom: 8px;
    }    
`;
const NotificationHeader = styled.div`
`;
const NotificationCheck = styled.div`
    display: flex;
    flex-direction: column;
    p, .ant-checkbox-wrapper {
        margin-bottom: 8px;
    }   
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0px;
    }    
`;

export const WrappedSettingForm = Form.create({ name: 'setting' })(SettingForm);
