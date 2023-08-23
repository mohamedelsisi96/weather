var locationTown=document.querySelector("#locationTown")
var dataLocation=document.querySelector("#dataLocation")
var todayMonth=document.querySelector("#todayMonth")
var tobayName=document.querySelector("#tobayName")
var todayDate=document.querySelector("#todayDate")
var townName=document.querySelector("#townName")
var todayDegree=document.querySelector("#todayDegree")
var todayPhoto=document.querySelector("#todayPhoto")
var todayStatue=document.querySelector("#todayStatue")
var nameNextday=document.querySelector("#nameNextday")
var picNextDay=document.querySelector("#picNextDay")
var maxDegNextDay=document.querySelector("#maxDegNextDay")
var minDegNextDay=document.querySelector("#minDegNextDay")
var statueNextDay=document.querySelector("#statueNextDay")
var namenNextday=document.querySelector("#namenNextday")
var picnNextDay=document.querySelector("#picnNextDay")
var maxDegnNextDay=document.querySelector("#maxDegnNextDay")
var minDegnNextDay=document.querySelector("#minDegnNextDay")
var statuenNextDay=document.querySelector("#statuenNextDay")
var todayHumdity=document.querySelector("#todayHumdity")
var todayWindSpead=document.querySelector("#todayWindSpead")
var todayWindDirection=document.querySelector("#todayWindDirection")
console.log(locationTown);
function displayDay(dayNum){
    switch (dayNum) {
        case "0":
            return `Sunday `
            break;
        case "1":
            return `Monday`
            break;
        case "2":
            return `Tuesday `
            break;
        case "3":
            return `Wednesday  `
            break;
        case "4":
            return `Thursday `
            break;
        case "5":
            return `Friday `
            break;
        case "6":
            return `Saturday `
            break;

    }
}


function displaymonth(monthNum){
    switch (monthNum) {
        case "0":
            return `January `
            break;
        case "1":
            return `February`
            break;
        case "2":
            return `March `
            break;
        case "3":
            return `April`
            break;
        case "4":
            return `May `
            break;
        case "5":
            return `June `
            break;
        case "6":
            return `July `
            break;
        case "7":
            return `August `
            break;
        case "8":
            return `September `
            break;
        case "9":
            return `October `
            break;
        case "10":
            return `November `
            break;
        case "11":
            return `December `
            break;

    }
}



async function weatherData(town){
    var apiData= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=145ec21f030f479292e203813230608&q=${town}&days=3`)
    var myData= await apiData.json()
    var finalData= myData
    todayPhoto.setAttribute("src",`${myData.forecast.forecastday[0].day.condition.icon}`)
    console.log(myData.forecast.forecastday[0].day.condition.icon)
    townName.innerHTML=myData.location.name
    todayDegree.innerHTML=myData.current.temp_c
    todayStatue.innerHTML=myData.current.condition.text
    picNextDay.setAttribute("src",`${myData.forecast.forecastday[1].day.condition.icon}`)
    maxDegNextDay.innerHTML=myData.forecast.forecastday[1].day.maxtemp_c
    minDegNextDay.innerHTML=myData.forecast.forecastday[1].day.mintemp_c
    statueNextDay.innerHTML=myData.forecast.forecastday[1].day.condition.text
    console.log(myData.forecast.forecastday[0].day.maxtemp_c)
    picnNextDay.setAttribute("src",`${myData.forecast.forecastday[2].day.condition.icon}`)
    maxDegnNextDay.innerHTML=myData.forecast.forecastday[2].day.maxtemp_c
    minDegnNextDay.innerHTML=myData.forecast.forecastday[2].day.mintemp_c
    statuenNextDay.innerHTML=myData.forecast.forecastday[2].day.condition.text
    todayHumdity.innerHTML=myData.current.humidity
    todayWindDirection.innerHTML=myData.current.wind_dir
    todayWindSpead.innerHTML=myData.current.wind_kph
    var dayOne=new Date(myData.forecast.forecastday[0].date)
    var dayTwo=new Date(myData.forecast.forecastday[1].date)
    var dayThree=new Date(myData.forecast.forecastday[2].date)
     nameNextday.innerHTML=displayDay(`${dayTwo.getDay()}`)
     namenNextday.innerHTML=displayDay(`${dayThree.getDay()}`)
     tobayName.innerHTML=displayDay(`${dayOne.getDay()}`)
     todayDate.innerHTML=`${dayOne.getDate() }`
     todayMonth.innerHTML=displaymonth(`${dayOne.getMonth()}`)
 console.log(displaymonth(`${dayOne.getMonth()}`));
    console.log(new Date(myData.forecast.forecastday[0].date))

  
}
 weatherData("benha")

dataLocation.addEventListener("click",function(){

    weatherData(locationTown.value)
})

