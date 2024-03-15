function isValidDate(date){
    let dateArray= date.split("/")
    let year = parseInt(dateArray[2])
    let month = parseInt(dateArray[1])
    let day= parseInt(dateArray[0])
    if (yearValide(year) == year){
       if(monthValid(month) == month){  
        if (monthValid2(month, day)== day){
            console.log("valid date")
        }
        else {
            console.log(" not valid day")
        }
    }
       else {
    console.log("not a valid month")
       }
    }  
    else 
    console.log("not a valid date")
}
isValidDate("12/12/1434")

function yearValide(x){
     if (x >= 999 && x <=9999) {
        return x
    }
    else {
        return 0
    }
}

function monthValid(y){
    if ( y >=1  && y <=12){
    return y
}
return 0
}

function monthValid2(m,d){
    let month31= [1,3,5,7,8,10,12]
    let month30 =[4,6,9,11]
    let month28=[2]
    for (const m31 of month31) {
        if (m == m31){
            if( d>=1 && d <=31){
                return d
            }
            else{
               return "not valid"
            }
        }
        for (const m30 of month30) {
                if( m == m30){
                    if( d >=1 && d <=30){
                        return d
                    }
                    else{
                       return 0
                    }
                }
            }
        }
        for ( const m28 of month28){
                if( m == m28){
                    if( d >=1 && d <=28){
                        return d
                    }
                    else{
                       return 0
                    }
            }
        }     
       
}

function isPalindrome (date){
    if(isValidDate(date)== true){
        console.log("hahaha")
    }
}
isPalindrome("31/12/2024")
    

