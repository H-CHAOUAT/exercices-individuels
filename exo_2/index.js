//etape 1 :

// Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. (Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé si besoin).
// Stocker sa réponse dans une variable de type adéquat nommée givenNumber.

// function giveANumber(){
//    let givenNumber = prompt("Guess a number?")
//     return givenNumber
// }


//Etape 2:

// function didIWin(giveANumber) {
//     let phrase = ""
//     let number =22
//     if (giveANumber < number) {
//         phrase ="Plus Grand"
//     }
//     else if (giveANumber > number) {
//         phrase ="Plus Petit"
//     }
//     else if (giveANumber == number) {
//         phrase ="Bravo ! Vous avez deviné le nombre"}      
//     else {
//          phrase = "Enter a Valid number"
//     }
//     return alert(phrase)

// }


// etape 3 :

// function giveANumber(){
//     let givenNumber = prompt("Guess a number?")
//      return givenNumber
//  }

// function giveANumber(){
//     let givenNumber = prompt("Guess a number?")
//      return givenNumber
//  }
 
// function didIWin(giveANumber) {
//       let number =22
     
//      if (giveANumber == number){
//         return true 
//      }
//      else {
//         return false
//      }
// }

// function gamePlay(){
   
//    let userGuess= parseInt(giveANumber())
//    let newPhrase = didIWin(userGuess)
//    let result =""
//    if (newPhrase == false){
//        gamePlay()
//     }else{
//        alert (result = "You Won!")
// }

// }
// gamePlay()

//etape 4: 

// function numberToGuess(){
//     let userInput = prompt("You are the First player, choose a number your component need to guess: (the number is between 0 and 50)")
//     return userInput
// }

// function giveANumber(){
//     let givenNumber = prompt("You are the Second player, you need to guess the number of your component, choose a number between 0 and 50 ")
//      return givenNumber
//  }

 
// function didIWin(giveANumber, numberToGuess) {
          
//      if (giveANumber == numberToGuess){
//         return true 
//      }
//      else {
//         return false
//      }
// }

// function gamePlay(){
//    let numberToGuessByPlayer1 = numberToGuess()
//    let isPlayerCorrect;
//    let newGuess;

//      while (!isPlayerCorrect){
//         newGuess = giveANumber()
//          if (numberToGuessByPlayer1 == newGuess) {
//             alert("You Won!")
//              break
//          }
//          }
//      }
// gamePlay()

//etape 5:

document.getElementById("secondPart").style.display="none"

document.getElementById("submit").addEventListener("click",function(){
   let numberToGuess = document.getElementById("number1").value
   document.getElementById("firstPart").value =""
   document.body.innerHTML= ""
   document.getElementById("secondPart").style.display = "inline-block"
   })


// function gamePlay(){
//       let numberToGuessByPlayer1 = numberToGuess()
//       let isPlayerCorrect;
//       let newGuess;
   
//         while (!isPlayerCorrect){
//            newGuess = giveANumber()
//             if (numberToGuessByPlayer1 == newGuess) {
//                alert("You Won!")
//                 break
//             }
//             }
//         }
//    gamePlay()
   

//  document.getElementById("submit").addEventListener("click",function(numberToGuess){
//  let guessedNumber = document.getElementById("number").value
//  let numberToGuessbyPlayer2 = numberToGuess()
//  if( guessedNumber == numberToGuessbyPlayer2){
//     document.body.innerHTML = ""
//     document.body.innerHTML += "<h1>"+ "You Won" + "</h1>"
//  }
//  else{
//     alert("try again")
//  }
//  })
