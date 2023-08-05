// Você deve criar três listas em JavaScript:
//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.

//Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

let pessoas = ["Fabio", "Luiz", "Rafael", "Andrea", "Thays", "Cassio", "Tauane", "Isabella", "Renata", "Sarah"]
let idadePessoas = [24, 26, 25, 42, 27, 41, 26, 27, 33, 12]
let corPessoas = ["Preto", "Azul", "Vermelho", "Rosa", "Preto", "Vermelho", "Amarelo", "Verde", "Lilás", "Rosa"]
console.log(pessoas)
console.log(idadePessoas)
console.log(corPessoas)

idadePessoas.splice(3, 1, 44)
console.log(idadePessoas)

corPessoas.splice(0, 1, "Azul")
console.log(corPessoas)