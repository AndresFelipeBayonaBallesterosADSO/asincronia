(async () => {
  try {
    // Leer archivo JSON
    let response = await fetch('user.json');
    let data = await response.json();

    // Extraer los usuarios
    let users = data.users;

    // Filtrar la consulta con solo los usuarios que sean aprendices
    let students = users.filter(user => user.aprendiz);

    // Iterar sobre cada aprendiz
    for (let student of students) {
      // Consultar repositorios públicos del usuario en GitHub
      let response = await fetch(`https://api.github.com/users/${student.user}/repos`);
      let repos = await response.json();

      // Mostrar los repositorios de cada aprendiz en consola
      console.log(`Repositorios de ${student.name}:`);
      console.table(repos);
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();
