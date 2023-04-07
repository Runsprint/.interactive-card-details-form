let threeZeroes = document.getElementById ("back_zeroes");
let zeros = document.getElementById("zeroes");
let name0 = document.getElementById("name")
let month_year = document.getElementById("month_year");
let type_name = document.getElementById("type_name");
let number0 = document.getElementById("numberzero");
let date1 = document.getElementById("date");
let date2 = document.getElementById("date2");
let date3 = document.getElementById("date3");
let button = document.getElementById("button");
let contbtn = document.getElementById("contbtn");
//span
let span = document.getElementById("span");
//errors
let blank2 = document.getElementById("blank2");
let blank1 = document.getElementById("blank1");
let wrong2 = document.getElementById("wrong2");
let wrong1 = document.getElementById("wrong1");
//for none and flex
let information = document.getElementById("information");
let none = document.getElementById("none");
date3.addEventListener("input", () => {
    if(date3.value.length > 3){date3.value = date3.value.slice(0,3);}
    if(date3.value.length < 3){date3.style.color = "red"} else { date3.style.color = "black"}
    threeZeroes.textContent = date3.value 
    date3.style.borderColor = "#610595";
})
number0.addEventListener("input", () =>{
    if(number0.value.length > 16){number0.value = number0.value.slice(0,16);}
    if(number0.value.length < 16){number0.style.color = "red"} else { number0.style.color = "black"}
    number0.style.borderColor = "#610595";  
    zeros.textContent = number0.value
    
})

date2.addEventListener("input", ()=>{
    if(date2.value.length > 2){date2.value = date2.value.slice(0,2);}
    if(date2.value.length < 2){date2.style.color = "red"} else { date2.style.color = "black"}
    span.textContent = date2.value;
    date2.style.borderColor = "#610595";
})
date1.addEventListener("input", ()=>{
    if(date1.value.length > 2){date1.value = date1.value.slice(0,2);}
    if(date1.value.length < 2){date1.style.color = "red"} else { date1.style.color = "black"}
    let name2 = month_year.childNodes[0];
    name2.textContent = date1.value + "/";
    date1.style.borderColor = "#610595";
})
type_name.addEventListener("input",() => {
    if( /^[a-zA-Z ]+$/.test( type_name.value)){
         wrong1.style.display = "none";
          type_name.style.borderColor = "#610595";
    }else {
        wrong1.style.display = "flex";   
    } 
    name0.textContent = type_name.value;
})
//its for reload something, restart after click 
contbtn.addEventListener("click", ()=>{
    location.reload();
})

button.addEventListener("click", ()=>{
     if(date3.value.length == 0) { blank2.style.display = "flex";}
     if( date3.value.length == 3 && date2.value.length == 2 
        && date1.value.length == 2 && ( /^[a-zA-Z ]+$/.test( type_name.value)) && number0.value.length == 16)  {   
       information.style.display = "none";
       none.style.display = "flex";
       number0.style.borderColor = "#610595"; 
     } else{
        date2.style.borderColor = "red"; 
        number0.style.borderColor = "red";
        date1.style.borderColor = "red"; 
        date3.style.borderColor = "red"; 
     }   
})