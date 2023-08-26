//CODIGO PROG BR
//analize...
let inputAdultos = document.getElementById('adultos')
let inputCrianças = document.getElementById('crianças')
let inputDuraçao = document.getElementById('duraçao')
let resultado = document.getElementById('resultado')//resposta ao html

function calcular() {
    console.log('calculando...')//simulando calculos js no console
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
//========================
// function calcular() {
//     //input.value
//     let an = document.getElementById('adultos')//0.4
//     let cn = document.getElementById('crianças')//0.2
//     let hn = document.getElementById('duraçao')
//     // console.log(an.value , cn.value , hn.value )
//     // let adultos = Number(an.value)
//     // let crianças =  Number(cn.value)
//     //div res
//     let rescarne = document.getElementById('rescarne')
//     // let rescerva = document.getElementById('rescerva')
//     // let resrefri = document.getElementById('resrefri')
//     //carne
//     let carneadulto = 0.4
//     let carnecriança = 0.2
//     //cerveja
//     let cervaadult = 4 //latas
//     let cervacri = 0 //criança nao bebe
//   //bebidas refri 2l
//     let refriadult = 0.7 //ml
//     let refricri = 1.3 //ml
//     let refri2l = refriadult + refricri 
//     // let pessoa = Number(an.value) ||
// //1 adutlo e 1 criança= 1 garrf.2lt refri || 2 adutl == 1 garrf.2lt refri 
// //a cada 2 pessoas == 1 garrf.2lt refri 
//     if (an.value.length== 0 && cn.value.length== 0 && hn.value.length== 0) {
//     // if (Number(an.value)==0 && Number(cn.value) && Number(hn.value)== 0) {
//         rescarne.innerHTML = ``
//         window.alert('Favor preencher os formulários')
//         an.focus()
//     }
// else if (an.value.length> 0 && cn.value.length> 0 && hn.value.length> 0) {
//  let adultos = an.value*carneadulto//0.4*adulto
//  let crianças =  cn.value*carnecriança//0,2*criança
// let carne = adultos+crianças
// rescarne.innerHTML = `${carne.toFixed(2)} kg de carne`
// // an.value = '' //zera valor digitado no input
// let adultsbebecerva = Number(an.value)*cervaadult
// let criansbebecerva = 0
// rescarne.innerHTML += `<br><br>${adultsbebecerva} Latas de cerveja`
// an.focus() //mantem cursor no input
// }}
//========================
//refri
// if () { 
// }
// let hora = Number(hn.value)
// let refriacriaeadult = Number(an.value) + Number(cn.value) + hora
// if (refriacriaeadult += 1) {
//     rescarne.innerHTML += `<br><br>${refriacriaeadult} Garrafas de 2lt de Refrigerante` 
// }
// carne.splice(2);
// adultos = 2
// crianças = 2
// alert(`estimativa de consumo ${carne.toFixed(2)} kg de carne`)//tofixed(2)reduz o nº de zero a direita
//CALCULOS
//adultos
// let cerveja = 3.5
//refrigerante = 2
//crianças
// let cervejacriança = 0
//refrigerante = 1
//duraçao
//hora = 60 min
//RESPOSTA HTML
//pseudocodigo
//receber
//processar
//mostrar resultados
