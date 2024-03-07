function inversion(){
    // Capturamos los valores de los campos del formulario
    let cNombres  = document.getElementById("nombres").value;
    let cEmail= document.getElementById("email").value;
    let cTelefono = document.getElementById("telefono").value;
    let cMonto = document.getElementById("inversion").value;
    let cTiempo = document.getElementById("tiempo").value;

    // Capturamos lo contenedores de Pre y Post simulación
    let contPre = document.querySelector('.pre-simulation');
    let contPost = document.querySelector(".post-simulation"); 

    // Capturamos los espacios o span para mostrar el nombre, email en la sección
    let sNombres = document.getElementById( "nombres-show");
    let sEmail = document.getElementById('email-show');
    let sTiempo = document.getElementById('tiempo-show');
    let sInteres = document.getElementById('interes-show');
    // let sMonto = document.getElementById('ganancia-show');
    let sTotal = document.getElementById('total-show');
    let sGanancias = document.getElementById('ganancias-show');

    let gananciaTotales = 0;
    let ganancias = 0;

    // Mostramos y ocultamos los paneles que estan a la deracha.
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    // Mostramos los datos del usuario
    sNombres.innerHTML=(cNombres);
    sEmail.innerHTML=(cEmail);

    // Utilizamos un switch para cambiar el tiempo y el interes segun los años seleccionados por el usuario
    switch (cTiempo) {
        case '1':
            sTiempo.innerHTML="12 meses";
            sInteres.innerHTML="0.8%";

            ganancias= (cMonto * 0.8)/100 * 12;
            gananciaTotales = parseInt(cMonto) + parseInt(ganancias);

            sTotal.innerText = gananciaTotales;
            sGanancias.innerText = ganancias;

            break;

        case '2':
            sTiempo.innerHTML="24 meses";
            sInteres.innerHTML="1.3%";

            ganancias= (cMonto * 1.3)/100 * 24; 
            gananciaTotales = parseInt(cMonto) + parseInt(ganancias);

            sTotal.innerText = gananciaTotales;
            sGanancias.innerText = ganancias;
            break;

        case '3':
            sTiempo.innerHTML="36 meses";
            sInteres.innerHTML="1.7%";

            ganancias= (cMonto * 1.7)/100 * 36; 
            gananciaTotales = parseInt(cMonto) + parseInt(ganancias);

            sTotal.innerText = gananciaTotales;
            sGanancias.innerText = ganancias;
        break;
        
        default:
            sTiempo.innerHTML= `${cTiempo} años`;
            sInteres.innerHTML=`${((0.03 * parseInt(cTiempo)) + 0.02).toFixed(2)}% mensual` ;
    }



}


// let contador = 100;

//     while (contador >= 0){
//         console.log(contador);
//         alert(contador);
//         contador = contador - 1;
//     }

// alert("Bienvenid@ usuari@ " + cNombres + " su telefono es " + cTelefono);
//     console.log("Bienvenid@ usuari@ " + cNombres + " su telefono es " + cTelefono);