import "./Price.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Price = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const schema = yup.object().shape({
    from_name: yup.string().required().min(3),
    from_email: yup.string().email().required(),
    message: yup.string().required().min(10),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_uj54k6c", //service ID
          "template_w464s0f", //template ID
          form.current,
          "9_T14NKRif_aWSwTd" //user ID/API key
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccess(true);
            setIsError(false);
          },
          (error) => {
            console.log(error.text);
            setIsSuccess(false);
            setIsError(true);
          }
        );
    }
  };

  return (
    <div className="price">
      <div className="container-price">
        <div className="price-text">
          <h1>Ceník</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>

      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <label>Jméno příjmení</label>
        <input
          type="text"
          name="from_name"
          placeholder="Jan Novák"
          {...register("from_name")}
        />
        {formState.errors.from_name && (
          <p className="error-message">Jméno je povinné a musí mít alespoň 3 znaky.</p>
        )}

        <label>E-mail</label>
        <input
          type="email"
          name="from_email"
          placeholder="example@gmail.com"
          {...register("from_email")}
        />
        {formState.errors.from_email && (
          <p className="error-message">Platný e-mail je povinný.</p>
        )}

        <label>Zpráva</label>
        <textarea
          name="message"
          placeholder="Dobrý den, 27.5.2024 bych potřeboval fotografa na svatbu u Prahy. Měla by jste volno?"
          {...register("message")}
        />
        {formState.errors.message && (
          <p className="error-message">Zpráva je povinná a musí mít alespoň 10 znaků.</p>
        )}

        {isSuccess && <p className="success-message">Zpráva byla úspěšně odeslána!</p>}
        {isError && <p className="error-message">Odeslání zprávy selhalo. Zkuste to prosím znovu.</p>}

        <input type="submit" value="Odeslat" />
      </form>
    </div>
  );
};
