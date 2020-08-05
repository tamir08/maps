function init(){
   const userData=getUserData();
   console.log(userData);
   setBgc(userData);
   showForecast()
}

function setBgc(userData){
   const color= userData['bgColor'];
   document.querySelector('body').style.backgroundColor=color;

}


function showForecast(){
   let elForecast= document.querySelector('.forecast')
   console.log(elForecast);
   elForecast.innerHTML='<h2>Your astrology forecast is: </h2>';
   elForecast.innerHTML+=`<h3>${getRndAstrologyForecast()} </h3>`;
}
