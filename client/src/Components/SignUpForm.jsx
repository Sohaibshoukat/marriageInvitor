import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = ({header, footer,button,text}) => {  
    return (
      <div className="bg-gradient-to-b h-screen flex items-center justify-center w-full">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full ">
          <h2 className="text-2xl font-bold text-gray-800 text-center">{header}</h2>
          <p className="text-center text-gray-400 text-sm mt-1 mb-6">{header} to Marriage Invitor</p>       
          <form>
            <div className="mb-4 flex items-center">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input type="text" id="name" name="name" placeholder="Name" className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input type="email" id="email" name="email" placeholder="Email Address" className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            
            <div className="mb-4 flex items-center">
              <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
              <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
                        
            <div className="mb-4 flex items-center">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input type="password" id="password" name="password" placeholder="Password" className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            
            <div className="mb-4 flex items-center">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">{button}</button>
          </form>

          
          <p className="mt-4 text-sm text-gray-600 flex items-center justify-center">{text} <Link to={`${footer=="Sign Up"?"/signup":"/login"}`}  className="text-blue-500">{footer}</Link></p>
          
        </div>
      </div>
    );
};
  
export default SignUpForm;
