import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { login } from '../../redux/AuthReducer';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'

const Login = (props) => {

	console.log("props", props);

	const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <>
        <div class="limiter d-flex justify-content-center mt-5">

			<div class="wrap-login100 p-b-160 p-t-50">
				<form class="login100-form validate-form"  >
					<span class="login100-form-title p-b-43">
						Account Login
					</span>
					
					<div class="wrap-input100 rs1 validate-input" data-validate = "Username is required">
						<Field name="username" class="input100"  component="input" type="text"  />
					
						<span class="label-input100">Username</span>{' '}
					</div>
					
					
					<div class="wrap-input100 rs2 validate-input" data-validate="Password is required">
						<Field name="pass"  component="input" type="password" className="input100" />
			
						<span class="label-input100">Password</span>{' '}
					</div>

					<div class="container-login100-form-btn">
						<Link to="/main" class="login100-form-btn" disabled={pristine || submitting}>
							Sign in
						</Link>
					</div>
					
					
				</form>
			</div>
	
	</div>
	
        </>
    )
}

export default reduxForm({
	form: 'login', 
  })(Login);
  