// components/ContactForm.tsx
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import parsePhoneNumberFromString from "libphonenumber-js";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .test("isValidPhone", "Invalid phone number", (value) => {
        const phoneNumber = parsePhoneNumberFromString(value || "", "US"); // Change "US" to your preferred default
        return phoneNumber && phoneNumber.isValid();
      }),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="md:mx-auto w-full md:p-4">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className=" mb-2 font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full p-2 border rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className=" mb-2 font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full p-2 border rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="mb-4">
        <label htmlFor="phone" className=" mb-2 font-medium">Phone</label>
        <PhoneInput
          id="phone"
          name="phone"
          country={"us"} // Set default country
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue("phone", value)}
          onBlur={formik.handleBlur}
          inputClass="w-full in p-2 border rounded"
          enableSearch
          countryCodeEditable={false} // Prevent editing country code
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}
      </div>

      {/* Message Field */}
      <div className="mb-4">
        <label htmlFor="message" className="mb-2 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded h-32 resize-none"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message} rows={8}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#EEEEEE] border-2 border-[#DDDDDD] p-2 rounded hover:bg-blue-600"
        disabled={formik.isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
