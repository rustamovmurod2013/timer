let sekundomer = document.getElementById("sekundomer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let min = document.getElementById("min");
let sek = document.getElementById("sek");
let hour = document.getElementById("hour")
let timer;
let secund = 0;
let minute = 0;
let soat = 0;

start.addEventListener("click", function(e){
    e.preventDefault()
    if(!timer) {
        timer = setInterval(() => {
            secund++

            if (secund === 60) {
                secund = 0;
                minute++;
                min.textContent = String(minute).padStart(2, '0');
            }

            if (minute === 60) {
                minute = 0;
                soat++;
                hour.textContent = String(soat).padStart(2, '0');
            }

            sek.textContent = String(secund).padStart(2, '0');
        }, 1000);
    }
})

stop.addEventListener("click", function(e){
    e.preventDefault()
    clearInterval(timer);
})