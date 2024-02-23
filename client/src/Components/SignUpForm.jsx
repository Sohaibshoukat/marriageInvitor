import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = ({ header, footer, button, text }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [next, setnext] = useState(false)
  const [Email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [SentOTP, setSentOTP] = useState('');

  const navigate = useNavigate()


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const OTPREQUEST = async () => {

    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("LoginTypeID", "2");
      urlencoded.append("UserName", "sohaibshoukat94@gmail.com");
      const response = await fetch('https://autowebtest.tiklive.club/AutoWeb/AutoWebUserSignUpFirst', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlencoded
      });

      if (response.ok) {
        const data = await response.json();
        setnext(true);
        setSentOTP(data.RetOTP)
      } else {
        // If the response is not successful, you can handle it here
        console.error('API error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  const SingUpForm = async () => {
    try {
      if (password == confirmPassword) {
        alert(`Password Don't Match`)
        return;
      }
      if (SentOTP == OTP) {
        alert(`In-Correct OTP`)
        return;
      }
      const response = await fetch('https://autowebtest.tiklive.club/AutoWeb/AutoWebUserSignUpSecond', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'LoginTypeID': '2',
          'UserName': Email,
          'OTP': OTP,
          "UserPassword": password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.User_Data.TokenID;
        const userid = data.User_Data.UserID;
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('userid', userid)
        navigate('/userDashboard', { data: data.User_Data });
      } else {
        // If the response is not successful, you can handle it here
        console.error('API error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  }

  return (
    <div className="bg-gradient-to-b h-screenr w-full">
      <div className="px-4 w-full h-full py-14">
        <div className="flex-col items-center w-85">
          <h1 className="text-5xl md:text-8xl p-2 font-bold text-amber-800">{header}</h1>
          <br />
          <p className=" text-gray-400 text-m mt-1 mb-6">
            {header} to Marriage Invitor
          </p>
          <form>
            {/* <div className="px-4">Enter your name</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className=" text-xl mt-1 px-4 py-2 w-full border-2 rounded-xl focus:outline-none ease-in-out duration-200 focus:ring focus:border-amber-700"
              />
            </div> */}

            <div className="px-4">Enter Email</div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input
                type="email"
                value={Email}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder="Email Address"
                className=" text-xl mt-1 px-4 py-2 w-full border-2 rounded-xl focus:outline-none ease-in-out duration-200 focus:ring focus:border-amber-700"
              />
            </div>

            {!next &&
              <div
                className="w-fit bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-white px-4 py-2 md:px-8 md:py-3 rounded-3xl"
                onClick={OTPREQUEST}
              >
                Get OTP
              </div>
            }

            {next && <>
              <div className="px-4">Enter OTP</div>
              <div className="mb-4 flex items-center">
                <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
                <input
                  type="tel"
                  value={OTP}
                  onChange={(e) => { setOTP(e.target.value) }}
                  placeholder="Recived OTP"
                  className=" text-xl mt-1 px-4 py-2 w-full border-2 rounded-xl focus:outline-none ease-in-out duration-200 focus:ring focus:border-amber-700"
                />
              </div>

              <div className="px-4">Enter Password</div>
              <div className="mb-4 flex items-center">
                <i className="fas fa-lock text-gray-500 mr-2"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
                  placeholder="Password"
                  className="text-xl mt-1 px-4 py-2 w-full border-2 rounded-xl focus:outline-none ease-in-out duration-200 focus:ring focus:border-amber-700"
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
                  value={confirmPassword}
                  onChange={(e) => { setconfirmPassword(e.target.value) }}
                  placeholder="Confirm Password"
                  className="text-xl mt-1 px-4 py-2 w-full border-2 rounded-xl focus:outline-none ease-in-out duration-200 focus:ring focus:border-amber-700"
                />
              </div>
              <br />
              <div
                className="w-fit bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-white px-4 py-2 md:px-8 md:py-3 rounded-3xl"
                onClick={SingUpForm}
              >
                {button}
              </div>
            </>
            }
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
      </div>
    </div>
  );
};

export default SignUpForm;
