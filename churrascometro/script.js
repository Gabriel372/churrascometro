//analize...
let inputAdultos = document.getElementById('adultos')
let inputCrianças = document.getElementById('crianças')
let inputDuraçao = document.getElementById('duraçao')
let resultado = document.getElementById('resultado')//resposta ao html

function calcular() {
let adultos = inputAdultos.value//valor digitado no input
let crianças = inputCrianças.value
let duraçao = inputDuraçao.value

let qtdTotalCarne = carnePP(duraçao) * adultos + (carnePP(duraçao) / 2 * crianças)//carnepp*adultos//crianças consomem 1/2 
let qtdTotalCerveja = bebidasPP(duraçao) * adultos//crianças nao bebem cerveja
let qtdTotalBebidas = bebidasPP(duraçao) * adultos + (bebidasPP(duraçao) / 2 * crianças)

resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de carne</p>`
resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p>`//math.ceil()=arredonda o valor pra cima ex: 1.4==2
resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} pet's 2l de bebidas</p>`//2000ml transforma 4000 ml em 2un de 2lts
inputAdultos.focus()//foco do cursos no 1º input'
}

function carnePP(duraçao) {
    if (duraçao >= 6) {//esse parametro funciona como desjuntor entre <6 e >6hs
        return 650// 650 gr se for 6hs ou mais de festa
    }else{
        return 400// 400 gr se for menos de 6hs de festa
    }
}
function cervejaPP(duraçao) {
    if (duraçao >= 6) {
        return 2000
    }else{
        return 1200
    }
}
function bebidasPP(duraçao) {
    if (duraçao >= 6) {//>= 6hs
        return 1500//ml
    }else{
        return 1000
    }
}
