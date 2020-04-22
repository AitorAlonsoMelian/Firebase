//Fichero JS autentificación

const signupForm = document.querySelector('#formulario');
signupForm.addEventListener('submit'(e) => {
  e.preventDefault();
    
    const name = signupForm['first_name'].value;
    const email = signupForm['signup_email'].value;
    const password = signupForm['signup_password'].value;
    const password2 = signupForm['signup_sec_password'].value;
    const terms = signupForm['checkterms'].value;

    if((password==password2)&&(terms)){
		// Registrar a los usuarios con los datos obtenidos
		  auth.createUserWithEmailAndPassword(email, password).then(cred => {
			console.log(cred.user);
			// Cerrar ventana y limpiardata
			signupForm.reset();
		  }).catch(function(error) {
		  var errorMessage = error.message;
		  window.alert("Algo ha pasado: " + errorMessage);
		});
	} else {
		if(password!=password2){
			window.alert("Las contraseñas no coinciden");
		}else{
			window.alert("Acepte los terminos de nuestra web.");
		}
	}

});