let threeZeroes = document.getElementById ("back_zeroes");
let zeros = document.getElementById("zeroes");
let name0 = document.getElementById("name")
let month_year = document.getElementById("month_year");
let type_name = document.getElementById("type_name");
let number0 = document.getElementById("number");
let date1 = document.getElementById("date");
let date2 = document.getElementById("date2");
let date3 = document.getElementById("date3");
let button = document.getElementById("button");
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
    threeZeroes.textContent = date3.value
    if(date3.value.length > 3) {
        date3.value = date3.value.slice(0,3);
        blank2.style.display = "flex";
        date3.style.borderColor = "red"
    } else {
        blank2.style.display = "none";
        date3.style.borderColor = "#610595"
    }
    
})
number0.addEventListener("input", () =>{
    zeros.textContent = number0.value
    if( !/^[0-9]$/.test(number.value)) {
        wrong2.style.display = "flex";
        number0.style.borderColor = "red";
    }else {
        wrong2.style.display = "none";
        number0.style.borderColor = "#610595"
    }

})
date2.addEventListener("input", ()=>{
    span.textContent = date2.value;
    if(date2.value.length >2){
        date2.value = date2.value.slice(0,2);
        date2.style.borderColor = "red";
        blank1.style.display = "flex";
    } else {
        blank1.style.display = "none";
        date2.style.borderColor = "#610595"
    }
})
date1.addEventListener("input", ()=>{
    let name2 = month_year.childNodes[0];
    name2.textContent = date1.value + "/";
    if(date1.value.length >2){
        date1.value = date1.value.slice(0,2);
        date1.style.borderColor = "red";
        blank1.style.display = "flex";
    } else {
        blank1.style.display = "none";
        date1.style.borderColor = "#610595"
    }
})
type_name.addEventListener("input",() => {
    name0.textContent = type_name.value;
    if( /^[a-zA-Z ]+$/.test( type_name.value)){
         wrong1.style.display = "none";
          type_name.style.borderColor = "#610595";
    }else {
        wrong1.style.display = "flex";
        type_name.style.borderColor = "red";
    } 
   
})

button.addEventListener("click", ()=>{
    if(date3.value.length > 3 && !/^[0-9]$/.test(number.value) && date2.value.length >2 && date1.value.length >2&&/^[a-zA-Z ]+$/.test( type_name.value)){
        information.style.display = "none";
        information.style.display = "flex"  
    }       
                   
})