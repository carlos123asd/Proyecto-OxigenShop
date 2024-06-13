const form = document.getElementById("formulario");
const mensaje = document.getElementById("message");
//maxlength="25" minlength="2"
form.addEventListener('submit',(form) => {
    form.preventDefault();
    //VALIDACION NOMBRE
    let valornombre = document.getElementById("nombre");
    if(valornombre.value == null) { 
        mensaje.innerHTML = 'El campo nombre es necesario'
        valornombre.classList.add('border_rojo');
    }else if(/[^a-zA-Z]/.test(valornombre.value)){
        mensaje.innerHTML = 'El campo nombre solo admite letras'
    }else if(valornombre.value.length < 2){
        mensaje.innerHTML = 'El nombre tiene que tener un minimo de 2 letras'
    }else{
        return true;
    }
    let checkbox = document.getElementById("check");
    if(!checkbox.checked){
        mensaje.innerHTML = 'Marque la casilla antes de continuar'
    }
});