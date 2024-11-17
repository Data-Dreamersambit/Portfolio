import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bgddlmea", userInfo);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Contact Me</h1>
      <p className="text-gray-700 mb-8">
        Have any questions or feedback? Fill out the form below, and I'll get
        back to you shortly!
      </p>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 w-full max-w-md px-8 py-6 rounded-2xl shadow-md"
        >
          <h1 className="text-lg font-semibold mb-6 text-gray-800">
            Send Your Message
          </h1>

          {/* Full Name */}
          <div className="flex flex-col mb-6">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                Full name is required.
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col mb-6">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium"
            >
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                Email address is required.
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="mt-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                Message is required.
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
