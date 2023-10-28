export function setupLoginSignupBehavior() {
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");

  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };

  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  signupLink.onclick = () => {
    signupBtn.click();
    return false;
  };
}

export function setupAdminLoginSignupBehavior() {
  const loginText1 = document.querySelector(".title-text_admin .login_admin");
  const loginForm1 = document.querySelector("form.login_admin");
  const loginBtn1 = document.querySelector("label.login_admin");
  const signupBtn1 = document.querySelector("label.signup_admin");
  const signupLink1 = document.querySelector("form .signup-link_admin a");

  signupBtn1.onclick = () => {
    loginForm1.style.marginLeft = "-50%";
    loginText1.style.marginLeft = "-50%";
  };

  loginBtn1.onclick = () => {
    loginForm1.style.marginLeft = "0%";
    loginText1.style.marginLeft = "0%";
  };

  signupLink1.onclick = () => {
    signupBtn1.click();
    return false;
  };
}

