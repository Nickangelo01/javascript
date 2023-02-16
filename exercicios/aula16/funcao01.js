console.log(`Consultar numeros`)

function parimp(n){
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimp(222)

console.log(`Este numero e ${res}`)