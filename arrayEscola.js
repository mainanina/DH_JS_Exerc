let a1={
    nome: "Camila",
    serie: "8a"
}
let a2={
    nome: "Marcela",
    serie: "8a"
}
let a3={
    nome: "Denis",
    serie: "9a"
}
let a4={
    nome: "Gabriela",
    serie: "8a"
}
let a5={
    nome: "Douglas",
    serie: "9a"
}
let alunos=[a1, a2, a3, a4, a5]
alunos.forEach(function(valor, indice) {
    if (valor.serie=="8a"){
        valor.materia="Historia"
    } else if (valor.serie=="9a"){
        valor.materia="Fisica"
    }
});
console.log(alunos)
