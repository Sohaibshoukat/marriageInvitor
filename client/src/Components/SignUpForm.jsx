import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = ({ header, footer, button, text }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-b h-screenr w-full">
      <div className="px-4 w-full h-full">
        <div className="flex-col items-center w-85">
          <h1 className="text-8xl p-2 font-bold text-amber-800">{header}</h1>
          <br />
          <p className=" text-gray-400 text-m mt-1 mb-6">
            {header} to Marriage Invitor
          </p>
          <form>
            <div className="px-4">Enter your name</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className=" text-xl mt-1 px-4 py-2 w-full border rounded-3xl focus:outline-none focus:ring focus:border-amber-200"
              />
            </div>

            <div className="px-4">Enter Email</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className=" text-xl mt-1 px-4 py-2 w-full border rounded-3xl focus:outline-none focus:ring focus:border-orange-200"
              />
            </div>

            <div className="px-4">Enter Number</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                className=" text-xl mt-1 px-4 py-2 w-full border rounded-3xl focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="px-4">Enter Password</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="text-xl mt-1 px-4 py-2 w-full border rounded-3xl focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="button"
                className="focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>

            <div className="px-4">Confirm Password</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="text-xl mt-1 px-4 py-2 w-full border rounded-3xl focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <br />
            <Link to={"#"}>
              <div className="w-fit bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-white px-4 py-2 md:px-8 md:py-3 rounded-3xl">
                {button}
              </div>
            </Link>
          </form>

          <br />
          <p className="mt-4 text-m text-gray-600 flex items-center justify-center">
            {text}{" "}
            <Link
              to={`${footer == "Sign Up" ? "/signup" : "/login"}`}
              className="text-amber-500"
            >
              {footer}
            </Link>
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default SignUpForm;
