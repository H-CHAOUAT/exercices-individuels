   //fonction pour requester le nom 
function askName(){
    let name = prompt("Quel est votre nom ?")
    if (name == "" || name === null ){
      alert("Saisir ine valeur valide")
      askName()
    }
    else if (!/^[a-zA-Z]+$/.test(name)) {
      alert("Please only enter letters")
      askName()}
   else {
    document.getElementById("affiche_nom").innerHTML= ` Bonjour ${name} 👋`}
}
askName()

// //fonction pour requester l'année de naissance 
function askBirthYear(){
    let age = prompt("Quel est ton anniversaire?(juste l'année)")
    if (age == "" || age === null ){
      alert("Saisir ine valeur valide")
      askBirthYear()
    }
    else if (/^[a-zA-Z]+$/.test(age)) {
      alert("Please only enter the year")
      askBirthYear()}
    else{
      let today = new Date()
      let year = today.getFullYear()
      age = year - age
     document.getElementById("affiche_age").innerHTML = `Vous avez ${age} ans`
    }
}

askBirthYear()

//fonction pour afficher l'age precis 
function agePrecis() {
   let age = prompt("Quel est ton anniversaire? (format dd/mm/yyyy)");

   // Check if the input is empty or null
   if (age === null || age.trim() === "") {
       alert("S'il vous plaît, saisissez une valeur valide.");
       agePrecis();
       return; // Return here to stop the function execution
   }

   // Regular expression to match the date format dd/mm/yyyy
   let dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

   // Check if the input matches the date format
   if (!dateRegex.test(age)) {
       alert("Veuillez saisir uniquement le format de date dd/mm/yyyy.");
       agePrecis();
       return; // Return here to stop the function execution
   }

   let parts = age.split('/');
   let dob = new Date(parts[2], parts[1] - 1, parts[0]);
   
   let today = new Date();
   let ageYears = today.getFullYear() - dob.getFullYear();
   
   if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
       ageYears--;
   }
   document.getElementById("age_precis").innerHTML = `Vous avez ${ageYears} ans`;
}

agePrecis();

