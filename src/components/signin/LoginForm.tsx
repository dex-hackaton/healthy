import React from "react";
import {Button, Form, Input} from "antd";
import styled from "styled-components";

 const LoginForm = (props: any) => {
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
         <FormBox onSubmit={handleSubmit} className="login-form">
             <Form.Item>
                 {getFieldDecorator('username', {
                     rules: [{ required: true, message: 'Пожалуйства введите email или телефон!' }],
                 })(
                     <Input
                         placeholder="Email или телефон"
                     />,
                 )}
             </Form.Item>
             <Form.Item>
                 {getFieldDecorator('password', {
                     rules: [{ required: true, message: 'Пожалуйства введите пароль!' }],
                 })(
                     <Input
                         type="password"
                         placeholder="Пароль"
                     />,
                 )}
             </Form.Item>
             <Form.Item>
                 <Button type="primary" htmlType="submit" className="login-form-button">
                     Войти
                 </Button>
                 <a className="login-form-forgot" href="">
                     Я забыл пароль
                 </a>
             </Form.Item>
         </FormBox>
     )
 };

const FormBox = styled(Form)`  
    margin-top: 60px;
    input {
        height: 50px;
        font-size: 16px;
    } 
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
`;

export const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
