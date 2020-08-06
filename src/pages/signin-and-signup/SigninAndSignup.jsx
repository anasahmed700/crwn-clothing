import React from 'react'

import './signin-and-signup.scss'
import Signin from '../../components/sigin/Signin'
import SignUp from '../../components/sign-up/SignUp'

const SigninAndSignup = () => {
  return (
    <div className="signin-signup row">
      <Signin className="col-12 col-md-6"/>
      <SignUp className="col-12 col-md-6"/>
    </div>
  )
}

export default SigninAndSignup
