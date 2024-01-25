//Se cambia a constante porque no va a cambiar el elemento, es decir, no se va a cambiar su elemento 
const formulario = document.querySelector(".formulario") //Para que seleccione el elemento form del HTML que está bajo una class se cambia por un #

formulario.onsubmit = function (e) {

  e.preventDefault();

  let nombre = formulario.elements[0].value; //por BP llamar a las variables de manera entendible
  let edad= formulario.elements[1].value; //Para obtener el elemento del array se le pasa el método .value
  let na = formulario.elements[2].value;
  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  const nombreInput = formulario.elements[0];//Faltaba tomar el elemento del formulario
  const edadInput = formulario.elements[1];

  if (nombre.length === 0) {
    nombreInput.classList.add("error"); 
  }else{   //En caso contrario lo siguiente se ejecutará
    edadInput.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error"); //Se le va a agregar una clase al elemento edad no al parámetro e. 
  } else{ //En caso contrario lo siguiente se ejecutará
    edadInput.classList.remove("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}


const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); //Estaba mal escrito la función classList.add
  lista.appendChild(elementoLista);

  const spanNombre = document.createElement("span");
  const inputNombre = document.createElement("input");
  const espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    //Se eliminó la declaración de spanNombre e inputNombre ya que ya estaban asignadas
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}