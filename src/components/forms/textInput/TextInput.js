import React from "react";

import cls from "../../../assets/styles/forms/Forms.module.scss";


export const TextInput = React.forwardRef(({
    type="",
    placeholder="",
    err="",
    ...rest
}, ref) => {
    const mode = ["username", "first_name", "last_name", "bio", "email", "password", "password_repeat"];

    return (
        <input
            type={type}
            placeholder={placeholder}
            {...rest}
            ref={ref}
            className={cls.text_input}
        />
    )
});