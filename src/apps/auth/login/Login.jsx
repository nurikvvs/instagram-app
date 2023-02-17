


import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';

import cls from "../../../assets/styles/login/Login.module.scss";

import Logo from "../../../assets/images/logo/insta.png";
import { FormsValidate } from '../../../helpers/forms';
import { REQUEST } from '../../../api';

export default function Login() {

  const{
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if(data) {
      const request = REQUEST.LOGIN_USER(data);

        request
          .then(res => {
            const data = res.data;

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
          })
    } 
  };

  return (
    <Components.Container>
      <section className={cls.login_page}>
        <div className={cls.login_page_card} data-aos="zoom-in-right">
          <Components.Image src={Logo}/>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Components.Forms.Divaider>
              <Components.Forms.TextInput
                type="tetx"
                placeholder="Username"
                {...register("username", FormsValidate())} 
              />
              <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
            </Components.Forms.Divaider>

            <Components.Forms.Divaider>
              <Components.Forms.TextInput
                type="password"
                placeholder="Paswword"
                {...register("password", FormsValidate())} 
              />
              <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
            </Components.Forms.Divaider>

            <Components.Forms.Divaider>
              <Components.Forms.AuthSabmit location={"Войти"}/>
            </Components.Forms.Divaider>
          </form>
        </div>
        <Components.Forms.AuthNavigate location="login"/>
      </section>
    </Components.Container>
  )
}
