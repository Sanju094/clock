let time = document.getElementById("time")
let date = document.getElementById("date");
function mytime()
{

let currentTime=new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let daylight= "AM";

let dates=currentTime.getDate();
const months=["jan","feb","mar","april","may","jun","jul","aug","sep","oct","nov","dec"];
let month=currentTime.getMonth() 
let year=currentTime.getFullYear();

daylight=hours>12? "PM":"AM";

hours=hours>12?hours-12:hours;
hours=hours<10?"0"+hours:hours;

minutes=minutes<10?"0"+minutes:minutes;
seconds=seconds<10?"0"+seconds:seconds; 
console.log(hours,minutes,seconds);
time.innerHTML = `${hours}:${minutes}:${seconds} ${daylight}`;
date.innerHTML= `${dates}-${months[month]}-${year}`;


}
setInterval(mytime,500);


