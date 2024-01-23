const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');/*Faltaba un punto */
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); /*Se agregó en el html */

async function displayUser(username) { /*Se agregó async a la función */
  $n.textContent = 'cargando...';
  
  //Promesas
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); 
    const data = await response.json(); //constante que guardará la response pero en json
    
    //Los elementos asumirán el contenido obtenido de la api
  $n.textContent = `${data.name}`; //Para hacer la interpolación se utilizan backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  //imprimir en consola lo guardado dentro de data
  console.log(data);
  } catch(error){
    handleError(error)
  };
}

displayUser('stolinski').catch(handleError); //Invocar la función

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //El nombre de la variable no era correcto
}

