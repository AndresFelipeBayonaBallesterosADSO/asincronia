// Definición de una función de flecha llamada "filtrar" que recibe un objeto "x" y devuelve "true" si la propiedad "name" del objeto es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Inicia la cadena de promesas con una llamada a la función fetch para leer el archivo JSON 'user.json'
fetch('user.json')
  // La primera promesa se resuelve con la respuesta de fetch, y la función "response.json()" convierte esta respuesta en un objeto JSON
  .then(response => response.json())
  // La segunda promesa se resuelve con el objeto JSON obtenido del archivo 'user.json'. Este objeto contiene información del usuario
  .then(user => {
    // Hace una nueva solicitud fetch a la API de GitHub usando el nombre del usuario obtenido del archivo JSON para obtener los repositorios del usuario
    return fetch(`https://api.github.com/users/${user.name}/repos`);
  })
  // La tercera promesa se resuelve con la respuesta de la solicitud a la API de GitHub, y la función "respuestGithub.json()" convierte esta respuesta en un objeto JSON que contiene la lista de repositorios del usuario
  .then(respuestGithub => respuestGithub.json())
  // La cuarta promesa se resuelve con el objeto JSON que contiene la lista de repositorios del usuario. A continuación, se itera sobre cada repositorio en la lista
  .then(usuariogithub => {
    // Itera sobre cada elemento (repositorio) en la lista de repositorios del usuario
    usuariogithub.forEach(element => {
      // Comprueba si el nombre del repositorio es "Evaluacion"
      if (element.name === "Evaluacion") {
        // Si se encuentra un repositorio con el nombre "Evaluacion", lo muestra en la consola
        console.log(element);
      }
    });
  })
  // Manejo de errores en caso de que alguna de las promesas falle. Si ocurre un error en cualquier punto de la cadena de promesas, se captura y muestra el error en la consola
  .catch(error => console.error('Error:', error));
