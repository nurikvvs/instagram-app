
import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import logo from "../../../assets/images/logo/insta.png";

import cls from "../../../assets/styles/register/Register.module.scss";
import { Link } from 'react-router-dom';
import { FormsValidate } from '../../../helpers/forms';
import { REQUEST } from '../../../api';
import { Hooks } from '../../../hooks';
import { AuthPath } from '../../../services/path';


export default function Register() {

    const { goToLogin } = Hooks.useLocations()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode:"onSubmit"
    });

    const onSubmit = (data) => {
 
        const newData = {
            ...data,
            avatar: null
        }

        if(data) {
            const request = REQUEST.CREATE_USER(newData);

            request
                .then(() => {
                    goToLogin();
                })
        }

        
    };

  return (
    <Components.Container>
        <section className={cls.register_page}>
            <div className={cls.register_page_card} data-aos="zoom-in-right">
                <Components.Image src={logo}/>

                <h3>
                  Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="tetx"
                            err={errors}
                            placeholder="Username"
                            {...register("username", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="tetx"
                            err={errors}
                            placeholder="First Name"
                            {...register("first_name", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.first_name ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="tetx"
                            err={errors}
                            placeholder="Last Name"
                            {...register("last_name", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.last_name ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="tetx"
                            err={errors}
                            placeholder="Bio"
                            {...register("bio", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.bio ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="tetx"
                            err={errors}
                            placeholder="Email"
                            {...register("email", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="password"
                            err={errors}
                            placeholder="Password"
                            {...register("password", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <Components.Forms.Divaider>
                        <Components.Forms.TextInput
                            type="password"
                            err={errors}
                            placeholder="Password Repeat"
                            {...register("password_repeat", FormsValidate())}
                        />
                        <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"}/>
                    </Components.Forms.Divaider>

                    <p className={cls.useable_services}>
                        Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram.
                        <a href='https://www.facebook.com/help/instagram/261704639352628'>Подробнее</a>
                    </p> 

                    <Components.Forms.Divaider>
                        <Components.Forms.AuthSabmit location={"Регистрация"}/>
                    </Components.Forms.Divaider>
                </form>
            </div>
            <Components.Forms.AuthNavigate location="register"/>
        </section>
    </Components.Container>
  )
}
