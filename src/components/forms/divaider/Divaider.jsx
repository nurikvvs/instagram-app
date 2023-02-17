
import React from 'react';

import cls from "../../../assets/styles/forms/Forms.module.scss";

export default function Divaider({children}) {
  return (
    <div className={cls.divader}>
      {children}  
    </div>
  )
};
