
getWeather();
let languages = document.querySelectorAll('.dropdown-item');

let locationInput= document.querySelector('.location-input');

// console.log(locationInput);
document.querySelector('.locationButtun').addEventListener('click',function(){
  console.log('hello');
  getWeather('',locationInput.value)
  
  
})

locationInput.addEventListener('blur',function () {
// console.log(locationInput.value ); 
 
  getWeather('',locationInput.value)
  
  
})




for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener('click', function (e) {
    // console.log(e.target.innerText)
    let lang ='';
    if(e.target.innerText=='Arabic'){
      lang= 'ar';
    }
    else if(e.target.innerText=='Italian')
    {
      lang='it';
    }
    else if(e.target.innerText=='Russian')
    {
      lang='ru';
    }  else if(e.target.innerText=='French')
    {
      lang='fr';
    }
    else{
      lang=''
    }
if(locationInput.value==""){
  console.log('hello');
  getWeather(lang,'cairo')

}
else{

    
    getWeather(lang,locationInput.value)}

  })

}




async function getWeather( lang='',Location='cairo') {


  let weatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=%20c3c5d4ab44764e8c97171453221710&q=${Location}&days=3&lang=${lang}`);
  let weather = await weatherApi.json();
  let finalResulte = [];
  finalResulte.push(weather);
  // console.log(finalResulte);
  for (let i = 0; i < finalResulte.length; i++) {


    document.querySelector('.today').innerHTML = `   <div class="Today-head  p-2 text-center  ">
    
     <h6>${finalResulte[i].forecast.forecastday[i].date}</h6>
     
     
     </div>
     <div class="px-2  Today-body">
     <h5 class="  fs-6 ps-2 pt-4"> ${finalResulte[i].location.name}</h5>
     <span  class="px-2">${finalResulte[i].location.region} </span>
     
     <div class=" d-flex justify-content-between align-items-center py-2 ">
       <div>
         <h2 class="  fw-bolder fa-6x  ">${finalResulte[i].current.temp_c}°C </h2>
       </div>
       <img src="https:${finalResulte[i].current.condition.icon}" width="w-100" alt="">
     </div>
     <span class=" text-info py-2"> ${finalResulte[i].current.condition.text}</span>
    
     <div class=" d-flex justify-content-between px-2 py-3">
       <div>
         <i class="fa-solid fa-umbrella"></i>
         <span>${finalResulte[i].current.cloud}%</span>
     
       </div>
       <div>
         <i class="fa-solid fa-wind"></i>
         <span>${finalResulte[i].current.wind_kph}km/h</span>
     
       </div>
       <div>
         <i class="fa-solid fa-compass"></i>
         <span>${finalResulte[i].current.wind_degree}°</span>
     
       </div>
     
     </div>
     </div> `
    document.querySelector('.tomorrow').innerHTML = `    <div class="tom-head p-2 ">
     <h6 class=" text-center">${finalResulte[i].forecast.forecastday[i + 1].date}</h6>
   </div>
   <div class="tom-body text-center py-5">
   <img src="https:${finalResulte[i].current.condition.icon}" width="w-100" alt="">


     <h2 class="  fw-bolder  py-3 ">${finalResulte[i].forecast.forecastday[i + 1].day.maxtemp_c}°C </h2>
     <h6>${finalResulte[i].forecast.forecastday[i + 1].day.mintemp_c}°C </h6>
     <span class=" text-info py-2">${finalResulte[i].forecast.forecastday[i + 1].day.condition.text}</span>

   </div>
     `
    // after_tomorrow
    document.querySelector('.after_tomorrow').innerHTML = `       <div class="after-tom-head p-2 ">
 <h6 class="text-center">${finalResulte[i].forecast.forecastday[i + 2].date}</h6>
</div>
<div class="after-tom-body text-center py-5 ">
<img src="https:${finalResulte[i].current.condition.icon}" width="w-100" alt="">


 <h2 class="  fw-bolder  py-3 ">${finalResulte[i].forecast.forecastday[i + 2].day.maxtemp_c}°C </h2>
 <h6>${finalResulte[i].forecast.forecastday[i + 2].day.mintemp_c}°C </h6>
 <span class=" text-info py-2 ">${finalResulte[i].forecast.forecastday[i + 2].day.condition.text}</span>

</div>
     `
  }
}



