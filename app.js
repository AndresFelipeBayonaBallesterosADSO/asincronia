const filtrar = x => x.name === "Evaluacion";

(async () => {
  // Leer archivo JSON
  let response = await fetch('user.json');
  // Esperar la respuesta y parsear el JSON
  let user = await response.json();

  let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  let usuariogithub = await respuestGithub.json();

  usuariogithub.forEach(element => {
    if (element.name === "Evaluacion") {
      console.log(element);
    }
  });

  // let data = usuariogithub.filter(filtrar)
  // console.log(data)
  // console.log(usuariogithub)
})();
