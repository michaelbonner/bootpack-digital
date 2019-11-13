import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, `Too Short!`)
    .max(50, `Too Long!`)
    .required(`First name is Required!`),
  lastName: Yup.string()
    .min(2, `Too Short!`)
    .max(50, `Too Long!`)
    .required(`Last name is Required!`),
  email: Yup.string()
    .email(`Enter a Valid Email!`)
    .required(`Email is Required!`),
  message: Yup.string().required(`Message is Required!`)
});
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
};

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Formik
      initialValues={{ email: ``, password: `` }}
      onSubmit={(values, { setSubmitting }) => {
        fetch(`/?no-cache=1`, {
          method: `POST`,
          headers: { "Content-Type": `application/x-www-form-urlencoded` },
          body: encode({
            "form-name": `contact`,
            ...values
          })
        })
          .then(() => {
            setSubmitted(true);
            setSubmitting(false);
          })
          .catch(error => {
            alert(`Error: Please Try Again!`);
            setSubmitting(false);
          });
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting
        /* and other goodies */
      }) => (
        <>
          <form
            className={submitted ? `hidden` : `visible`}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
            onReset={handleReset}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Jane"
                  type="text"
                />
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Doe"
                  type="text"
                />
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  type="email"
                />
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  name="company"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Company Name"
                  type="text"
                />
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.company && touched.company && errors.company}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="801-111-2222"
                  type="text"
                />
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  How Can We Help?*
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Please give us details about what you're trying to accomplish"
                  rows="10"
                ></textarea>
                <p className="text-red-500 text-xs italic px-2 pt-1">
                  {errors.message && touched.message && errors.message}
                </p>
              </div>
            </div>
            <div>
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className={submitted ? `visible` : `hidden`}>
            <h2>Thank you for contacting us! We'll be in touch soon</h2>
          </div>
        </>
      )}
    </Formik>
  );
}
export default ContactForm;
