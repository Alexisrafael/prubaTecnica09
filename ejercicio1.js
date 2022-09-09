function multiplicar(c,d){
    
}

multiplicar(3,5)
console.log(multiplicar(8,5))


function numeroMayor(array){
    return array.sort((a,b)=>{
        if(a > b) return -1
    } )[0]
}
const numeros = [5, 4, 9, 6]
console.log(numeroMayor(numeros))


function desanidar(array){
    return array.flat()
}

const a = [[1,4], [[1]], [8, []]]
console.log(desanidar(a))

function buscarContar(){

}