import React from "react";
import {Button, Form, Input} from "antd";
import styled from "styled-components";

 const RegistrationForm = (props: any) => {
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
                     rules: [{ required: true, message: 'Пожалуйства введите имя и фамилию!' }],
                 })(
                     <Input
                         placeholder="Имя и фамилия"
                     />,
                 )}
             </Form.Item>
             <Form.Item>
                 {getFieldDecorator('email', {
                     rules: [{ required: true, message: 'Пожалуйства введите почту!' }],
                 })(
                     <Input
                         placeholder="Почта"
                     />,
                 )}
             </Form.Item>
             <Form.Item>
                 {getFieldDecorator('email', {
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
                     Зарегистрироваться
                 </Button>
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
    }
`;

export const WrappedRegistrationForm = Form.create({ name: 'normal_login' })(RegistrationForm);
