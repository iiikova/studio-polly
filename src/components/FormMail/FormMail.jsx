import React, { useRef } from "react";
import s from "./FormMail.module.scss";

function FormMail() {
  const emailRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    emailRef.current.value = "";
  };

  return (
    <div className={s.form}>
      <form onSubmit={onSubmit}>
        <input ref={emailRef} type="text" placeholder="Enter your email" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default FormMail;
