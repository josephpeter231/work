import  { useEffect } from 'react';
import './loginOrSignup.css';
import {setupLoginSignupBehavior,setupAdminLoginSignupBehavior} from './loginscript.js';



const LoginOrSignup = () => {
        useEffect(() => {
        setupLoginSignupBehavior();
        setupAdminLoginSignupBehavior(); 
       
    }, []);
return (
    <div className='Login_back'>
        <div className='Login_title_cont'>
            <h2 className='Login_title'>Developers</h2>
            <h2 className='Login_title'>Admin</h2>
        </div>
        <div className='Initial_cont'>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Login Form</div>
                    <div className="title signup">Signup Form</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked="" />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login">
                        Login
                        </label>
                        <label htmlFor="signup" className="slide signup">
                        Signup
                        </label>
                        <div className="slider-tab" />
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required="" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="field btn">
                            <div className="btn-layer" />
                            <input type="submit" defaultValue="Login" />
                        </div>
                        <div className="signup-link">
                            Not a member? <a href="">Signup now</a>
                        </div>
                        </form>
                        <form action="#" className="signup">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required="" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="User Name" required="" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" required="" />
                        </div>
                        <div className="field btn">
                            <div className="btn-layer" />
                            <input type="submit" defaultValue="Signup" />
                        </div>
                        </form>
                    </div>
                </div>        
            </div>
            {/* Admin  */}
            
            <div className="wrapper_admin ">
                <div className="title-text_admin">
                    <div className="title login_admin">Login Form</div>
                    <div className="title signup_admin">Signup Form</div>
                </div>
                <div className="form-container_admin">
                    <div className="slide-controls_admin">
                        <input type="radio" name="slide" id="login_admin" defaultChecked="" />
                        <input type="radio" name="slide" id="signup_admin" />
                        <label htmlFor="login_admin" className="slide login_admin">
                        Login
                        </label>
                        <label htmlFor="signup_admin" className="slide signup_admin">
                        Signup
                        </label>
                        <div className="slider-tab" />
                    </div>
                    <div className="form-inner_admin">
                        <form action="#" className="login_admin">
                        <div className="field_admin">
                            <input type="text" placeholder="Email Address" required="" />
                        </div>
                        <div className="field_admin">
                            <input type="text" placeholder="Admin_Key" required="" />
                        </div>
                        <div className="field_admin">
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="pass-link_admin">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="field btn_admin">
                            <div className="btn-layer_admin" />
                            <input type="submit" defaultValue="Login" />
                        </div>
                        <div className="signup-link_admin">
                            Not a member? <a href="">Signup now</a>
                        </div>
                        </form>
                        <form action="#" className="signup_admin">
                        <div className="field_admin">
                            <input type="text" placeholder="Email Address" required="" />
                        </div>
                        <div className="field_admin">
                            <input type="text" placeholder="Admin_Key" required="" />
                        </div>
                        <div className="field_admin">
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="field_admin">
                            <input type="password" placeholder="Confirm password" required="" />
                        </div>
                        <div className="field btn_admin">
                            <div className="btn-layer_admin" />
                            <input type="submit" defaultValue="Signup" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginOrSignup;