"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Link from 'next/link';
const ApplicationFormPage = () => {

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setSelectedFile(file);
    }
  };
     // Validation Schema
      const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().matches(/^[0-9]+$/, "Must be a valid phone number").required("Phone number is required"),
        position: Yup.string().required("Please select a position"),
        portfolioLink: Yup.string().required("Please Provide Portfolio link"),
        linkedinLink: Yup.string().required("Please Provide Linkedin link"),
        experience: Yup.string().required("experience required"),
        coverLetter: Yup.string().required("Cover Letter is required"),
      });
    
      // Initial Values
      const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        portfolioLink: "",
        linkedinLink: "",
        experience: "",
        coverLetter: "",
      };
    
      // Form Submission
      const handleSubmit = (values, { resetForm }) => {
        console.log("Form Data:", values);
        resetForm();
      };
  return (
    <>

    <section className="mt-20">
        <div className="container flex-wrap flex gap-4 mx-auto px-12 py-12">
            <Link href={""} className="flex text-white justify-between gap-4 items-center">
                Open Vacancies
                <IoIosArrowForward size={23} className="text-white" />
            </Link>
            <Link href={""} className="flex text-white justify-between gap-4 items-center">
                Junior UI/UX Designer
                <IoIosArrowForward size={23} className="text-white" />
            </Link>
            <Link href={""} className="flex text-gray-300 cursor-not-allowed pointer-events-none justify-between gap-4 items-center">
                Application Form
            </Link>
        </div>
        <div className="container flex flex-col justify-center items-center gap-8 mx-auto px-6">
            <div className="cards xl:w-[1062px] roundedCust bg-white p-6 shadow-md">
            <h1 className="text-white text-3xl lg:text-4xl font-semibold text-center">Application Form</h1>
            {/* Formik Form */}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                <Form className="space-y-6 pt-6">
                    <h3 className="text-red text-2xl font-semibold">Personal Details</h3>
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-white">First Name</label>
                            <Field type="text" name="firstName" className="w-full p-2 border rounded" placeholder="Enter first name" />
                            <ErrorMessage name="firstName" component="div" className="text-danger font-bold text-md" />
                        </div>
                        <div>
                            <label className="block mb-2 text-white">Last Name</label>
                            <Field type="text" name="lastName" className="w-full p-2 border rounded" placeholder="Enter last name" />
                            <ErrorMessage name="lastName" component="div" className="text-danger font-bold text-md" />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="block mb-2 text-white">Email</label>
                            <Field type="email" name="email" className="w-full p-2 border rounded px-10" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="div" className="text-danger font-bold text-md" />
                            <MdEmail className="absolute top-10 left-2 text-gray-700" size={24} />
                        </div>
                        <div className="relative">
                            <label className="block mb-2 text-white">Phone Number</label>
                            <Field type="text" name="phone" className="w-full p-2 border rounded px-10" placeholder="Enter last name" />
                            <ErrorMessage name="phone" component="div" className="text-danger font-bold text-md" />
                            <IoIosCall className="absolute top-10 left-2 text-gray-700" size={24} />
                        </div>
                    </div>

                    {/* Portfolio link  */}
                    <div className="">
                        <label className="block mb-2 text-white">Website/Portfolio link</label>
                        <Field type="text" name="portfolioLink" className="w-full p-2 border rounded" placeholder="Enter website/portfolio link" />
                        <ErrorMessage name="portfolioLink" component="div" className="text-danger font-bold text-md" />
                    </div>

                    {/* Linkedin Profile link */}
                    <div className="">
                        <label className="block mb-2 text-white">Linkedin Profile link</label>
                        <Field type="text" name="linkedinLink" className="w-full p-2 border rounded" placeholder="Enter linkedIn profile link " />
                        <ErrorMessage name="linkedinLink" component="div" className="text-danger font-bold text-md" />
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Position*/}
                        <div>
                            <label className="block mb-2 text-white">Position Applying For</label>
                            <Field as="select" name="position" className="w-full p-2 border rounded">
                                <option value="">UI/UX Designer</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="SEO Optimization">SEO Optimization</option>
                            </Field>
                            <ErrorMessage name="position" component="div" className="text-danger font-bold text-md" />
                        </div>

                        {/* Experience*/}
                        <div>
                            <label className="block mb-2 text-white">Years of Experience</label>
                            <Field type="text" name="experience" className="w-full p-2 border rounded" placeholder="0" />
                            <ErrorMessage name="experience" component="div" className="text-danger font-bold text-md" />
                        </div>
                    </div>



                    {/* Cover Letter */}
                    <div className="z-50">
                        <label className="block mb-2 text-white">Cover Letter</label>
                        <Field as="textarea" name="coverLetter" rows="8" className="w-full p-2 border rounded" placeholder="Write your cover letter here." />
                        <ErrorMessage name="coverLetter" component="div" className="text-danger text-md font-bold" />
                    </div>




                    <div className="">
                        <label className="block mb-2 text-white">Upload Your Resume</label>

                        <label className="bg-red flex justify-center items-center rounded-lg cursor-pointer mb-2 w-135 h-400 text-white">
                            <Field  onChange={handleFileChange}  type="file" name="file" className="hidden" placeholder="0" />
                            Upload File
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center py-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-red text-white px-6 h-63 w-313 rounded transition"
                        >
                            {isSubmitting ? "Submiting..." : "Submit Application"}
                        </button>
                    </div>
                </Form>
                )}
            </Formik>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ApplicationFormPage
