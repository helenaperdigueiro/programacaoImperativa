let array1 = [2, 4, 6];

let array2 = array1.map((cadaElemento) => { // let array2 = [4, 8, 12]
    return cadaElemento * 2
})

let array3 = array2.map((cadaElemento) => { return cadaElemento * 2 })
console.log(array1)
console.log(array2)
console.log(array3)