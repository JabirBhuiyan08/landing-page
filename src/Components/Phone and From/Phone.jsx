import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/imgs/img2.jpg";
import img8 from "../../assets/imgs/img8.jpg";

const Phone = ({ scrollToForm }) => {
  console.log("Phone Component - scrollToForm prop:", scrollToForm);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay the animation for 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <button
        className="btn btn-primary mx-auto flex justify-center"
        onClick={scrollToForm}
      >
        Contact
      </button>
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-dark-blue min-h-screen text-white px-4 py-10">
        {/* Center Section (Phone) */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2 flex flex-col items-center">
          <div className="mt-10 flex justify-center">
            <div className="mockup-phone border-primary shadow-lg">
              <div className="camera"></div>
              <div className="display bg-gray-50">
                <div className="artboard artboard-demo phone-1 bg-white overflow-hidden">
                  <h1 className="text-xl sm:text-3xl font-extrabold mb-3 text-center">
                    Welcome!
                  </h1>
                  {/* Hero Section */}
                  <div className="bg-gradient-to-b rounded-lg p-6 from-purple-500 to-indigo-500 text-white text-center rounded-b-lg shadow-md">
                    <p className="text-xs sm:text-sm">
                      Experience the future of web design
                    </p>
                    <button className="mt-4 bg-white text-purple-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-200">
                      Get Started
                    </button>
                  </div>
                  {/* Feature Section */}
                  <div className="p-4">
                    {[
                      {
                        id: 1,
                        title: "Landing Page Creation",
                        description:
                          "Make your landing page professional at affordable prices.",
                      },
                      {
                        id: 2,
                        title: "Website Boosting & SEO",
                        description:
                          "Boost and market your website effectively.",
                      },
                      {
                        id: 3,
                        title: "Design Services",
                        description:
                          "Posters, Flyers, Logos, and Business Cards.",
                      },
                    ].map((feature) => (
                      <div
                        key={feature.id}
                        className="mb-4 flex items-center bg-gray-100 rounded-lg p-3 shadow-md"
                      >
                        <div
                          className={`w-10 h-10 text-white rounded-full flex items-center justify-center mr-3 ${
                            feature.id % 2 === 0
                              ? "bg-indigo-500"
                              : "bg-purple-500"
                          }`}
                        >
                          {feature.id}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Section */}
          <div className="flex justify-center mt-10 text-black">
            <label
              htmlFor="my_modal_7"
              className={`btn transition-transform transform hover:scale-105 ${
                animate ? "animate-bounce" : ""
              }`}
            >
              Learn More
            </label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box bg-pink-50 border border-pink-200 shadow-xl rounded-lg relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-pink-100 opacity-50 rounded-lg -z-10">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 200 200"
                  >
                    <rect
                      x="20"
                      y="20"
                      width="50"
                      height="50"
                      fill="rgba(255, 105, 180, 0.1)"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="50"
                      fill="rgba(255, 105, 180, 0.2)"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-pink-700 flex items-center">
                  🚀 Landing Page, Marketing, and Design Solutions!
                </h3>
                <img
                  className="w-32 mx-auto my-4 rounded-full border-4 border-pink-400 shadow-lg"
                  src={img8}
                  alt="Professional Marketing Icon"
                />
                <p className="py-4 text-black">
                  <span className="text-2xl font-semibold text-pink-700 flex items-center">
                    🛠️ Customized Design:
                  </span>
                  Develop a landing page for your business goals aimed at
                  conversion to sales or lead capturing.
                  <br />
                  <span className="text-xl text-black">
                    Responsive and Dynamic:
                  </span>
                  Developed with help of up-to-date frameworks such as React,
                  guaranteeing optimal loading time and great performance on any
                  device.
                  <br />
                  <span className="text-xl text-black">Features Included:</span>
                  Adlinks are used for creating call-to-action (CTA) buttons to
                  direct visitors. Capture forms that sync with your CRM or
                  email marketing platforms. A structure that is search-engine
                  friendly to enhance better rankings.
                  <br />
                  <span className="text-xl text-black">Why It Matters:</span>
                  Having a well-designed landing page can greatly enhance user
                  attention and convert visitors into customers.
                  <br />
                  <span className="text-2xl font-semibold text-pink-700 flex items-center mt-4">
                    🎨 Design Offerings:
                  </span>
                  <span className="text-xl text-black">Posters:</span>
                  Overhead transparencies for conferences, business meetings,
                  seminars, or presentations, printed directional and
                  information signs, and commercial billboards.
                  <br />
                  <span className="text-xl text-black">Flyers:</span>
                  Small and appealing layouts to grab people’s attention
                  quickly.
                  <br />
                  <span className="text-xl text-black">Logos:</span>
                  Creative and distinctive logo creations that generate brand
                  identity.
                  <br />
                  <span className="text-xl text-black">Business Cards:</span>
                  Clean, professional, and sophisticated designs to create a
                  lasting impression.
                  <br />
                  <span className="text-xl text-black">Why It Matters:</span>
                  Establishing credibility, enhancing branding, and attracting
                  customers with well-designed materials.
                  <br />
                  <span className="text-xl text-black mt-4">Tools:</span>
                  Illustrated using industry-standard graphic design tools like
                  Adobe Illustrator for the best quality.
                </p>
              </div>

              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-2/3 order-2 lg:order-1 flex justify-center">
          <img
            className="rounded-full shadow-lg max-w-xs sm:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300"
            src={img1}
            alt="Mockup Image"
          />
        </div>
        {/* Footer Section */}
        <div className="text-center lg:text-left mt-4 lg:mt-0">
          <h2 className="text-2xl font-bold">
            Develop Your{" "}
            <span className="text-6xl font-normal text-gray-300">Business</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Phone;
