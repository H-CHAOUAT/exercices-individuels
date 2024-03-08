let listOfNumbers =[1,2,3,4,5,6]
//reduce method
// listOfNumbers.reduce((acc,value) => acc + value)
//  //etape1
function sum1(list){
return list.reduce((acc,value) => acc + value)
}
console.log(sum1(listOfNumbers))

//etape 2
function sum2(array){
    let total =0 
    for( number of array){
    if (Array.isArray(number)){
        total += sum2(number)
    }
    else {
       total += number
    }}
return total
   
}
console.log(sum2(listOfNumbers))

    //etap3: 
// On appelle factoriel le produit des entiers inférieurs ou égaux à un nombre donné. Exemple : factoriel de 3 = 1x2x3 = 6

// Écrire une fonction factorial qui prend un entier en paramètre et calcule son factoriel récursivement.

function factorial(num){   
   if( num == 0 || num == 1) {
    return 1
   }
   else {
    num*= factorial(num-1)    
  }
  return num
}
console.log(factorial(5))

//etape 4 

function fibonacci(n){
    if (n==0){
        return 0
    }
    else if (n==1){
     return 1}

    else{
        n = fibonacci(n-1)+ fibonacci(n-2)
    }
    return n
}
console.log(fibonacci(3))