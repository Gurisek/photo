import "./Price.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Price = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // TODO: reply_to a styling

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
