/*function parImp(n){
    if(n%2 == 0){
        return 'Par'
    } else{
        return 'Ímpar'
    }
}

let res = parImp(4)
console.log(res)*/

//---------------------------------------------

/*function soma(n1=0, n2=0){ //se nenhum número for passado, vale 0
    return n1 + n2
}

console.log(soma(2, 5))*/

//---------------------------------------------

/*let v = function(x){ //colocar função dentro de uma variável
    return x*2
}

console.log(v(5))*/

//---------------------------------------------

/*function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))*/

//---------------------------------------------

function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1) //recursividade, função recursiva, q tem uma chamada pra ela própria
    }
}

console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/