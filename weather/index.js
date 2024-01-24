let input = document.querySelector("#city")
let btn = document.querySelector("#add")
let city = document.querySelector("#cityoutput")
let description = document.querySelector("#description")
let temp = document.querySelector("#temp")
let wind = document.querySelector("#wind")
let apik = "f189583530d1cf59e3ae5ca0ae77c73a"
let winem = "\u{1F4A8}"
let te = "\u{2103}"
const cloudSymbol = '☁️';
function convert(val){
    return (val-273).toFixed(3)
}

btn.addEventListener("click", function(){
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid="+apik)
.then( res => res.json())
.then(data => {
    const nameval = data['name']
    const descrip = data['weather']['0']['description']
    const temperature = data['main']['temp']
    const windspeed = data['wind']['speed']

    city.innerHTML = `Weather of <span> ${nameval}</span>`
    temp.innerHTML = `Temperature ${te} : <span>${convert(temperature)}</span>`
    description.innerHTML = `Sky Condition ${cloudSymbol} : <span> ${descrip} </span>`
    wind.innerHTML = `Wind Speed ${winem}  : <span>${windspeed}</span>`
})

.catch(err => alert("you entered wrong city"))



})