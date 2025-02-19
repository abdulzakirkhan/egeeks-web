"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";

import { IoIosCall } from "react-icons/io";
const ContactUsPage = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Must be a valid phone number").required("Phone number is required"),
    serviceType: Yup.string().required("Please select a service"),
    message: Yup.string().required("Message is required"),
  });

  // Initial Values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  };

  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <>
      <section className="mt-20 relative">
        <div
          className="bg-no-repeat ms-auto bg-center absolute right-0 -top-14 h-520 w-1/2"
          style={{ backgroundImage: "url(/Contact/right.png)", backgroundSize: "100% 100%" }}
        />
        <div className="container flex flex-col justify-center items-center gap-8 mx-auto px-6 py-14">
          <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">Contact Us</h1>
          <div className="cards w-[1062px] roundedCust bg-white p-6 shadow-md">
            {/* Formik Form */}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white">First Name</label>
                      <Field type="text" name="firstName" className="w-full p-2 border rounded" placeholder="Enter first name" />
                      <ErrorMessage name="firstName" component="div" className="text-red font-bold text-md" />
                    </div>
                    <div>
                      <label className="block text-white">Last Name</label>
                      <Field type="text" name="lastName" className="w-full p-2 border rounded" placeholder="Enter last name" />
                      <ErrorMessage name="lastName" component="div" className="text-red font-bold text-md" />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-white">Email</label>
                      <Field type="email" name="email" className="w-full p-2 border rounded px-10" placeholder="Enter your email" />
                      <ErrorMessage name="email" component="div" className="text-red font-bold text-md" />
                      <MdEmail className="absolute top-8 left-2 text-gray-700" size={24} />
                    </div>
                    <div className="relative">
                      <label className="block text-white">Phone Number</label>
                      <Field type="text" name="phone" className="w-full p-2 border rounded px-10" placeholder="Enter last name" />
                      <ErrorMessage name="phone" component="div" className="text-red font-bold text-md" />
                      <IoIosCall className="absolute top-8 left-2 text-gray-700" size={24} />
                    </div>
                  </div>

                  {/* Types of Service */}
                  <div>
                    <label className="block text-white">Types of Service</label>
                    <Field as="select" name="serviceType" className="w-full p-2 border rounded">
                      <option value="">Select a Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                    </Field>
                    <ErrorMessage name="serviceType" component="div" className="text-red font-bold text-md" />
                  </div>

                  {/* Message */}
                  <div className="z-50">
                    <label className="block text-white">Message</label>
                    <Field as="textarea" name="message" rows="4" className="w-full p-2 border rounded" placeholder="Tell us a bit what you’re looking for." />
                    <ErrorMessage name="message" component="div" className="text-red text-md font-bold" />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red text-white px-6 py-2 rounded transition"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>



        <div
          className="bg-no-repeat ms-auto bg-center absolute left-0 -bottom-20 h-520 w-500"
          style={{ backgroundImage: "url(/Contact/left.png)", backgroundSize: "100% 100%" }}
        />
      </section>
    </>
  );
};

export default ContactUsPage;
