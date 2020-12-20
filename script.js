'use strict'
const timer = (id, deadline) => {
    const getTimerRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)) % 24),
                days = Math.floor((t/(1000 * 60 * 60 * 24)));

                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
                days = timer.querySelector("#days"),
                hours = timer.querySelector("#hours"),
                minutes = timer.querySelector("#minutes"),
                seconds = timer.querySelector("#secundes"),
                timeInterval =setInterval(updateClock, 1000);
                function updateClock(){


                    const t = getTimerRemaining(endtime);

                    days.textContent = addZero(t.days);
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
                    if (t.total <= 0 ) {
                        days.textContent = '00';
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';

                        clearInterval(timeInterval);
                    }
                }
    }; 
    
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;

        } else {
            return num;
        }
    };

    setClock(id, deadline);
};


let deadline = '2020-12-31';
timer('.timer', deadline);

/******------------------------------- */
let arr1 = ['Kolya', 'Olli','Anya' ];
let arr2 = ['Anya','Kolya', 'Busya', 'Olli', 'Marianna', 'Tanya' ];
let res = [];

for (let i = 0; i<arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]) {
            res[i] = arr2[j];
        }
    }
}
  console.log(res);