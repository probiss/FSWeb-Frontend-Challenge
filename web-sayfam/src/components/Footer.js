import styled from "styled-components"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
    const Start1 = styled.div`
        background-color: #F9F9F9;
        padding-left: 125px;
        padding-right: 175px;
        
    `

    const Start2 = styled.p`
        padding-top: 85px;
        color: #1F2937;
        width: 540px;
        font-weight: 600;
        font-size: 42px;
        line-height: 125%;
    `
    const Start3 = styled.div`
        padding-top: 62px;
        display: flex;
        justify-content: space-between;
        padding-bottom:  135px;
    `


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6znuvsk",
                "template_5p05jxc",
                form.current,
                "KhDlmaJFoqKxAB8Zj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <Start1>
            <div id="footer">
                <Start2>
                    <p>Let's work together on <br />your next product.</p>
                </Start2>
                <div>
                    <Start3>
                        <div className="flex items-center gap-1">
                        <StyledContactForm>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form>
                        </StyledContactForm>
                        </div>
                        <div className="flex gap-5">
                            <a href="" className="text-black no-underline text-lg tracking-wider font-semibold" > Personel Blog </a>
                            <a href="https://github.com/probiss" className="text-green-500 no-underline text-lg tracking-wider font-semibold" > Github </a>
                            <a href="https://www.linkedin.com/in/cihat-bulut-2b2167135/" className="text-sky-500 no-underline text-lg tracking-wider font-semibold" > Linkedin </a>
                        </div>
                    </Start3>
                </div>
            </div>
        </Start1>
    )
}

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #4338CA;
      color: white;
      border: none;
    }
  }
`;