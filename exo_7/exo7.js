let totalMatches= 50  


function matchesRemoved(numberOfMatchesRemoved){
 totalMatches = totalMatches- numberOfMatchesRemoved
 return totalMatches
}

function gameloop(){
    while (totalMatches > 0) {
        let numberOfMatchesRemoved =prompt("how many number of matches you want to remove ?")
         if (numberOfMatchesRemoved >6 || numberOfMatchesRemoved < 1){
             alert("enter a valid number between 1 and 6 ?")
         }else{
            matchesRemoved(numberOfMatchesRemoved)
            alert(`you have ${totalMatches} matches left`)
         }
        }
    return "you won"
}  

document.getElementById("result").innerHTML=gameloop()