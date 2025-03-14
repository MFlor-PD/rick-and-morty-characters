// 1 -Extraer elementos del DOM id="prev-page" y id="next-page" y añadirles un evento click
// 2 - Crear variables
// 3 - Crear EL FETCH
// 4 - Crear FUNCIONES

const text = document.createElement('p');
const pagination = document.getElementById('pagination');
pagination.appendChild(text);

const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');

const listaPersonajes = document.getElementById('character-list');//capture el ul 


const url1 = `https://rickandmortyapi.com/api/character/?page=1`;
const url2 = `https://rickandmortyapi.com/api/character/?page=2`;

fetch(url1)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Su peticion no ha sido posible');
    }
      return response.json();
  })

  .then((data) => {
    listaPersonajes.innerHTML = data.results;

    data.results.forEach((personaje) => {
      let listaCreada = document.createElement('li');
      listaCreada.innerText = personaje.name;
      listaPersonajes.appendChild(listaCreada);
    });
 })
 
  .catch((error) => {
    text.innerText = 'Error: no se ha podido cargar la pagina';
  });
  
  
/*obtenerChiste.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Programming?lang=es')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Su peticion no ha sido posible');
      }
      return response.json();
    })

    .then((data) => {
      chiste.innerText = data.value;
    })

    .catch((error) => {
      chiste.innerText = 'Error: no se ha podido obtener la broma';
    });
});*/
