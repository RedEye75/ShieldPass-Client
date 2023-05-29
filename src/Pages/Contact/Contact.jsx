import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";

import { BsFillSendFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

const Contact = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        "FmqreMkLnogSjg1Zs"
      )
      .then(
        (result) => {
          if (user?.uid) {
            // console.log(result.text);
            toast.success("Message sent successfully");
            navigate("/");
          } else {
            toast.error("kindly log in first");
            navigate("/login");
          }
          // console.log(result.text);
          // toast.success("Message sent successfully");
          // navigate("/");
        },
        (error) => {
          console.log(error.text);
          toast.error("Opps..! message not send");
        }
      );
  };

  return (
    <div>
      <div className=" max-w-screen-xl mx-auto">
        <section id="contact">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                id="title"
                className="mt-5  text-4xl font-bold  text-[#1b3764] mb-2"
              >
                Contact
              </h1>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                id="txt"
                className="lg:w-2/3 mx-auto font-bold text-xl "
              >
                Reach Out to Us for Support or Questions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_7wwm6az7.json"
                  background="transparent"
                  speed="1"
                  loop
                  // controls
                  autoplay
                ></lottie-player>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div
                  // data-aos="fade-left"
                  // data-aos-duration="1500"
                  className="mt-0 lg:mt-40 mx-auto"
                >
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        id="inputTxt"
                        placeholder="Enter your name"
                        name="user_name"
                        readOnly
                        defaultValue={user?.displayName}
                        required
                        className="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="inputTxt"
                        readOnly
                        placeholder="Enter your Email"
                        name="user_email"
                        defaultValue={user?.email}
                        required
                        className="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>

                    <div>
                      <textarea
                        id="inputTxt"
                        name="message"
                        required
                        placeholder="Additional details"
                        className="w-full border-black border-2 py-5 px-3 rounded"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  id="title"
                  className="btn btn-outline w-full max-w-xs rounded-none bg-[#1b3764] text-white"
                  // disabled={disable ? true : false}
                  type="submit"
                >
                  submit <BsFillSendFill className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
