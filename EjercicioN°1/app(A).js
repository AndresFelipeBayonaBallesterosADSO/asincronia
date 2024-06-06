// Función de flecha que filtra un elemento cuyo nombre sea "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Función autoejecutable asincrónica
(async () => {
  // Leer archivo JSON
  let response = await fetch('user.json');
  // Esperar la respuesta y parsear el JSON
  let user = await response.json();

  // Consultar al usuario Github
  let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  // Esperar la respuesta y parsear el JSON
  let usuariogithub = await respuestGithub.json();

  // Iterar sobre los repositorios del usuario
  usuariogithub.forEach(element => {
    // Filtrar y mostrar en consola el repositorio con nombre "Evaluacion"
    if (element.name === "Evaluacion") {
      console.log(element);
    }
  });

  // let data = usuariogithub.filter(filtrar)
  // console.log(data)
  // console.log(usuariogithub)
})();
