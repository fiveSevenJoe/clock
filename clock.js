const hr = document.querySelector(".hr")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const am = document.querySelector(".am")

function clockTime(){
    const time = new Date()
    
   hrs1 = time.getHours()
   mins1 = time.getMinutes()
   sec1 = time.getSeconds()
   ms1 = time.getMilliseconds()
   
  hr.textContent = hrs1
  min.textContent = mins1
  sec.textContent = sec1

  if(hour < 12)
     hr = hr -12
     am = pm
   

}

setInterval(clockTime,1000)