let input = document.getElementById("inputBox")
let btn =  document.querySelectorAll("button")
let string = "";
let array = Array.from(btn);
array.forEach((btn) =>{
     btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
            
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
        string+= e.target.innerHTML;
        input.value = string;
        }
    })
})