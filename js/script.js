// 1 traer los datos de la API v
// 2 Meter los datos traspasados del fetch dentro del DOM. v
// 3 crear funciones necesarias  v
// 4 configurar paginacion 
// 5 agregar eventos a los botones de paginacion


 // 3 crear funciones necesarias, en este caso para mostrar los datos de cada personaje y agregarlos al DOM
function mostrarDatos(character) {
    let datos = ''; // crear variable para almacenar los datos
    for (const propiedad in character) { //variable propiedad, traida de la API, para recorrer los datos de cada personaje
        datos += (`${propiedad}: ${character[propiedad]}`); //agregar a la variable datos, la propiedad y el valor de cada personaje
    }
    return datos;
    };
    

// 1 traer los datos de la API
fetch(`https://rickandmortyapi.com/api/character/?page=1`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('No se pudo realizar su solicitud');
        }
            return response.json();
        })

    .then((data) => {
              //console.log(data)
        let ulCharactersList = document.getElementById('character-list'); // 2 Meter los datos traspasados del fetch dentro del DOM. (CAPTURE UL)
        
        data.results.forEach(character=> { //asumo que character tmb lo trae de la API
            let li = document.createElement('li'); // 2 Meter los datos traspasados del fetch dentro del DOM. (CREAR LI PARA CADA PERSONAJE, por eso dentro de f(x))
            let img = document.createElement('img'); // 2 Meter los datos traspasados del fetch dentro del DOM. (CREAR IMG PARA CADA PERSONAJE, por eso dentro de f(x))
 
            img.src = character.image; // 2 Meter los datos traspasados del fetch dentro del DOM. (fuente de la imagen, asumo que la trae de la API)
            img.alt = character.name; // 2 Meter los datos traspasados del fetch dentro del DOM. (texto alternativo de la imagen)
            li.appendChild(img);// 2 Meter los datos traspasados del fetch dentro del DOM. (AGREGAR IMG A LI)
            
            li.innerHTML += mostrarDatos(character); // 2 Meter los datos traspasados del fetch dentro del DOM.(modifica li dentro de UL con el contenido de la f(x) mostrarDatos)
            ulCharactersList.appendChild(li); // 2 Meter los datos traspasados del fetch dentro del DOM. (AGREGAR LI A UL)
        });
        
    })  
    .catch((error) => {
        console.log('Error:', error);
    });

  
   
