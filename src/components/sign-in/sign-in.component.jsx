import React from "react";
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.components.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} 
          handleChange={this.handleChange}
          label="email"
          required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
            
          />

          <div className='button'>
<CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign in With Google{' '} </CustomButton>
          <CustomButton type="submit"> SIGN IN </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
