let text=document.querySelector('.text')
let icon=document.querySelector('.icon')

let weather={
    "apiKey":"94a2979601224edb24f840913cde8123",
    fetchWeather:function(city){
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey)
     .then((response)=>response.json())
     .then((data)=>this.displayWeather(data))
    },

    displayWeather: function(data){
       const {name}=data
       const {temp,humidity}=data.main
       const {speed}=data.wind

       document.querySelector('.degree').innerHTML=temp+'K'
       document.querySelector('.wind').innerHTML=speed +'km/h'
       document.querySelector('.humidity').innerHTML=humidity+'%'
       document.querySelector('.city').innerHTML=name 

    },

    search:function(){this.fetchWeather(text.value)}
}

icon.addEventListener('click',()=>{
     weather.search()
     text.value=""
})

document.addEventListener('keydown',(e)=>{
    if(e.keyCode==32){
        weather.search()
        text.value=""
    }
})