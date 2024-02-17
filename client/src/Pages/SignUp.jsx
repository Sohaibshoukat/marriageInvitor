import React from 'react';
import FormImage from '../Components/FormImage.jsx';
import SignUpForm from '../Components/SignUpForm.jsx';
import SignUpImage from "../assets/SignUpImage.jpeg"

function SignUp() {
  
    return(

<div class="flex items-center justify-center">
  <div class="lg:w-1/2 h-full md:block hidden">
    <FormImage source={SignUpImage}/>
  </div>
  <div class="lg:w-1/2 mx-4 w-full">
    <SignUpForm header={"Sign Up"} footer={"Sign In"} button={"Sign Up"} text = {"Already have an account?"}/>
  </div>
</div>

  
  );
}

export default SignUp;
