const age = 17;
const CNH = true;

if (age >= 18 && CNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

console.log(3 > 2 > 1);

if (3 > 2 && 2 > 1) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

const option = 5;

switch (option) {
  case 1:
    console.log("Docinho!");
    break;
  case 2:
    console.log("Barra de chocolate");
    break;
  case 3:
    console.log("Latinha de refrigerante");
    break;
  default:
    console.log("Por favor, escolher um item");
    break;
}

const num = 2;
const isAdmin = false;

try {
  if (isAdmin) {
    console.log("Ver relatório: " + num);
  } else {
    throw new Error("Sem autorização para executar tarefa!");
  }
} catch (error) {
  console.error(error);
} finally {
  console.log("Sempre executa!");
}

document.write("App is Online!");
