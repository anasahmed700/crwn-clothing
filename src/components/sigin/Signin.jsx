import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './signin.scss'
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils'


class Signin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmit}>
          <FormInput name='email' type='email' label='Email'
          value={this.state.email} handleChange={this.handleChange} required />
          
          <FormInput name='password' type='password' label='Password'
          value={this.state.password} handleChange={this.handleChange} required />

          <div className="buttons">
            <CustomButton type='submit' > Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;