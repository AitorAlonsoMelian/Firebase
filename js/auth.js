//Fichero JS autentificación
//Grupo 04 UyA - Aitor Alonso, Jesús Chamizo, Eduardo Da Silva
const signupForm = document.querySelector('#formulario');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	//Obtenermos los valores del formulario
	const name = signupForm['first_name'].value;
	const email = signupForm['signup_email'].value;
	const password = signupForm['signup_password'].value;
	const password2 = signupForm['signup_sec_password'].value;
	const terms = signupForm['checkterms'].value;

    	if((password==password2)&&(terms)){
          	//var referencia = database.ref(name);
		var referencia = database.ref(name);
      		//Add users data
		referencia.set({
            		usuario: name,
            		correo: email,
           		contraseña: password
        	});
      		window.alert("Registrado correctamente");
      		signupForm.reset();
   	} else {
        if(password!=password2){
            window.alert("Las contraseñas no coinciden");
        }else{
            window.alert("Acepte los terminos de nuestra web.");
        }
    }
});
