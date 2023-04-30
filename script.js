const apikey="17e7373d28383027b526e541ffff0a9d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const srch=document.querySelector('.search input');
const srchbtn =document.querySelector('.search button');
async function chewtr(city){
    const res=await fetch(apiurl+ city+`&appid=${apikey}`);
    if(res.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.wthr').style.display="none";
    }
    var data =await res.json();
    console.log(data);


document.querySelector('.city').innerHTML=data.name;
document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
document.querySelector('.Wind').innerHTML=data.wind.speed+"km/hr";
document.querySelector('.wthr').style.display="block";
document.querySelector('.error').style.display="none";

}
srchbtn.addEventListener('click',()=>{
    chewtr(srch.value);
})

