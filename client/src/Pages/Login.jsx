import React from 'react';
import FormImage from '../Components/FormImage.jsx';
import LogInForm from '../Components/LogInForm.jsx';
import LogInImage from "../assets/LoginImage.jpeg"

function SignUp() {
  
    return(

<div class="flex items-center justify-center">
  <div class="lg:w-1/2 h-full md:block hidden">
    <FormImage source={LogInImage}/>
  </div>
  <div class="lg:w-1/2 mx-4 w-full">
    <LogInForm header={"Sign In"} footer={"Sign Up"} button={"Sign In"} text = {"Don't have account?"}/>
  </div>
</div>

  
  );
}

export default SignUp;
