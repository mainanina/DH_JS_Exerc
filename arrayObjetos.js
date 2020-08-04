let p1={
    nome: "Televisão",
    preco: 4438
}
let p2={
    nome: "Celular",
    preco: 2100
}
let p3={
    nome: "Impressora",
    preco: 750
}
let p4={
    nome: "Air Fryer",
    preco: 987
}
let precos=[];
let supermercado =[p1, p2, p3, p4];
supermercado.forEach(function(valor, indice){
    precos.push(valor.preco)
})
console.log(precos.reduce(function (total, numero){return total+numero}))

