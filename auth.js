// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  //console.log(email);
  console.log(password);
  if ((email == "jrjeep@gmail.com") && (password == "12345678")) {
    console.log(email);
    window.open("index2.html");
   } else {
     window.open("error.html");
   }
  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);

    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});