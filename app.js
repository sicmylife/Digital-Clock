function showTime (){


let time = new Date()
let h = time.getHours()
let m = time.getMinutes()
let s = time.getSeconds()
let session = 'AM'

if (h==0){
    h=12
}

if (h>12){
    h=h-12
    session = 'PM'
}

h = (h<10) ?'0'+h:h
m = (m<10) ?'0'+m:m
s = (s<10) ?'0'+s:s


const timeDisplayed = h + ':' + m + ':' + s + ' ' + session;

document.getElementById('display').innerHTML = timeDisplayed;
document.getElementById('display').textContent = timeDisplayed;
setTimeout  (showTime,1000)

}
showTime();

