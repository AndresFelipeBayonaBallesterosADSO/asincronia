// Definir una función para filtrar elementos basada en el nombre
const filtrar = x => x.name === "Evaluacion";

// Función asíncrona autoejecutable para manejar el proceso
(async () => {
  try {
    // Leer archivo JSON de usuarios
    let response = await fetch('user.json');
    // Esperar la respuesta y parsear el JSON
    let users = await response.json();

    // Leer datos de GitHub para cada usuario aprendiz
    let aprendicesPromises = users.aprendices.map(async (aprendiz) => {
      // Hacer una solicitud a la API de GitHub para obtener información del usuario
      let respuestGithub = await fetch(`https://api.github.com/users/${aprendiz.user}`);
      // Parsear la respuesta JSON de GitHub
      let usuarioGithub = await respuestGithub.json();
      // Retornar un objeto con el nombre y la URL del avatar del usuario
      return {
        name: aprendiz.name,
        avatar_url: usuarioGithub.avatar_url
      };
    });

    // Esperar todas las promesas de los aprendices
    let aprendices = await Promise.all(aprendicesPromises);

    // Imprimir los datos de los aprendices en una tabla
    console.table(aprendices, ['name', 'avatar_url']);
  } catch (error) {
    // Manejar errores en caso de que ocurran durante el proceso
    console.error("Ocurrió un error:", error);
  }
})();

