let key ='4b12184d23faa7d26d532a1369bd653a'
let city = 'Ставрополь'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
console.log(url)
//api.openweathermap.org/data/2.5/weather?q=Stavropol&appid=4b12184d23faa7d26d532a1369bd653a&units=metric

let temp, feelsLike, desc, wind, icon

let l_temp = document.querySelector('#l_temp')
let l_feelsLike = document.querySelector('#l_feelsLike')
let l_wind = document.querySelector('#l_wind')
let l_desc = document.querySelector('#l_desc')
let l_icon = document.querySelector('#icon')

let  inputCity = document.querySelector('#inputCity')
inputCity.addEventListener('change', GetData)

function GetData(){
    SetUrl()
    fetch(url)
        .then(data=>{
            console.log(data)
            if(data.ok){
                data.json()
                    .then(data=>{
                        console.log(data)
                        console.log(data.main.temp)
                        console.log(data.weather[0].description)
                        temp = data.main.temp
                        feelsLike = data.main.feels_like
                        desc = data.weather[0].description
                        wind = data.wind.speed
                        icon = data.weather[0].icon
                        GetDataWeather(temp, feelsLike, desc, wind, icon)
                    })
            }
        })
}
function GetDataWeather(_temp, _feelsLike, _desc, _wind, _icon){
    console.log(_temp, _feelsLike, _desc, _wind, _icon)
    l_temp.innerHTML = 'Температура: ' + _temp + '&deg;'
    l_feelsLike.innerHTML = 'Ощущается как: ' + _feelsLike + '&deg'
    l_desc.textContent = _desc
    l_wind.textContent = 'Скорость ветра: ' + _wind + 'м/с'
    l_icon.src = `http://openweathermap.org/img/wn/${_icon}@4x.png`
}
function SetUrl(){
    city = inputCity.value 
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
}