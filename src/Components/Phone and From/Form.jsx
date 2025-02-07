import React from "react";

const Form = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Let’s Work Together!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        From building and managing websites to helping you grow your business
        through various digital marketing channels, we’re here to support you on your digital journey. Contact us today to learn more.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input input-bordered w-full"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="input input-bordered w-full"
            placeholder="Your Company Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full"
            placeholder="Your Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="input input-bordered w-full"
            placeholder="Your Phone Number"
          />
        </div>
        <div>
          <label htmlFor="help" className="block text-gray-700 font-medium mb-1">
            How Can We Help?
          </label>
          <textarea
            id="help"
            className="textarea textarea-bordered w-full"
            placeholder="Describe your needs..."
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            className="checkbox checkbox-primary"
            required
          />
          <label htmlFor="consent" className="text-gray-600">
            I’m happy for this website to store my info, so they can respond to my enquiry.
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto px-6 py-2 font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
