import Head from "next/head";

import { FaPaperPlane } from "react-icons/fa";

import emailjs from "emailjs-com";

import toast, { Toaster } from "react-hot-toast";

const contact = () => {
  const handleSubmit = (e) => {
    const loading = toast.loading("Sending...");
    const { fname, lname, email, mobile, msg } = e.target;
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kjxixnr",
        "template_vul8qsj",
        e.target,
        "BRpFUQy5nF08zkvSA"
      )
      .then(() => {
        toast.success("Message sent!");
        toast.dismiss(loading);
        fname.value = "";
        lname.value = "";
        email.value = "";
        mobile.value = "";
        msg.value = "";
      })
      .catch((err) => {
        toast.error("Message could not be sent!");
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>PACE Commerce - Contact us</title>
        <meta
          name="keywords"
          content="Commerce classes for class XI,Commerce classes for class 11, tutorials for COMMERCE class 11, Accounts for class 11, commerce coaching near me,commerce tutorials,top commerce classes, Commerce classes for class XII,Commerce classes for class 12,tutorials for COMMERCE class 12,Accounts for class 12,top commerce classes, commerce classes in Kankarbagh, commerce classes in Patna,commerce class,commerce for inter,commerce for CBSE 12,commerce for CBSE 11,Best commerce classes,best commerce classes"
        />
      </Head>
      <Toaster />
      <div className="container">
        <h1 className="section-title">Got some questions?</h1>
        <p className="section-text">Drop them below 👇</p>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="grid gap-10 md:grid-cols-2 mt-12">
            <div className="input-field">
              <label htmlFor="fname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                name="fname"
                className="form-input"
                id="fname"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="lname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                name="lname"
                className="form-input"
                id="lname"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="mobile" className="form-label">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                className="form-input"
                id="mobile"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                id="email"
                required
              />
            </div>
            <div className="input-field md:col-span-2">
              <label htmlFor="msg" className="form-label">
                Message:
              </label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                className="form-input"
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="mt-6 flex btn items-center bg-gradient-to-br from-green to-blue text-white"
            >
              Send <FaPaperPlane className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default contact;
