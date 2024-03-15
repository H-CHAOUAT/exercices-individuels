let date = "29/02/2024"


function validDate(date){
   let dateArray = date.split ("/")
   let day = parseInt(dateArray[0])
   let month = parseInt(dateArray[1])
   let  year = parseInt(dateArray[2])
  
    if (isValidYear(year) && isValidMonth(month)&&isValidDay(month,day)){
     return "date is valid"
    }
     return "date is not valid"
   }
  console.log(validDate(date))

   
function isValidYear(year){
      if (year> 999 && year <= 9999){
      return true 

   } return false 
  }




function isValidMonth(month){

    if (month> 0 && month <= 12){
      return true 

   } return false 
  }


function isValidDay(month,day){
    if (month==1 ||month==3 || month==5 || month==7 || month==8 || month==10 || month== 12 ){
      if (day>0 && day<=31 ){
     return true}
    }else if (month==4 ||month==6 ||month==9||month==11 ){
      if (day>0 && day<=30 ){
     return true }
    }else if (month==2){
      if (day>0 && day<=28 ){
    return true }
  }  return false 

}




 //étape 2

 function isPalindrome(date){
    return dateArray2= date.split("")


   


 }
 console.log(isPalindrome(date))

