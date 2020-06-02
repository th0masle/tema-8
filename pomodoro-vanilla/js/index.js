// Ta fatt på elementene time, unit og button
var timeTextObject = document.querySelector('.time')
var unitTextObject = document.querySelector('.unit')
var startButton = document.querySelector('.button')
let timer

let time = {
    minutes: 1,
    seconds: 0
}

//opprett en listener på startknap, og kald en funktion, start
//denne funksjon fjerner startknappen og ordet 'min' 
//deretter setter den et interval på et sekund, som hver gang kalder funksjonen tick
//til slutt må den oppdatere tiden på skjermen med å kalde funksjonen showDuration()
startButton.addEventListener('click', () => {
    startButton.classList.add('hidden')
    unitTextObject.classList.add('hidden')
    timer = setInterval(tick, 1000)
    showDuration()
})


//Appens 'motor' kjører hvert sekund
//oprett en funksjon tick, som kjører hvert sekund
//sjekk om alarmen skal ringe - reset timer og tidsobjekt 
//ellers, kald countdown og showduration
const tick = () => {
    if (time.minutes == 0 && time.seconds == 0) {
        alarm()

    } else {
        countDown()
        showDuration()
    }
}

const alarm = () => {
        timeTextObject.innerHTML('ALARM')
        clearInterval(timer)
        setTimeout(() => {
                time = {
                    min: 25,
                    seconds: 0
                }
                startButton.classList.remove('hidden')
                unitTextObject.classList.remove('hidden')
                timeTextObject.innerHTML = '25'
            }, 5000)
        }

        //oprett en funksjon, showduration som viser tidfen
        //hvis sekunder er mindre end 10  sett et 0 inn foran  
        //hvis minutter er mindre end 10  sett et 0 inn foran  

        //Viser tiden på skjermen
        const showDuration = () => {
            let minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes
            let seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds
            timeTextObject.innerHTML = `${minutes}:${seconds}`
        }



        //Telle tiden ned
        //oprett en funksjon, countDown som trekker et sekund fra 
        //hvis sekunder er mindre enn null - trekk et minutt fra og sett sekunder til 59
        const countDown = () => {
            time.seconds = time.seconds - 1
            if (time.seconds < 0) {
                time.minutes = time.minutes - 1 
                time.seconds = 59
            }
        }









        //Vi skal bruke fire funksjoner: 
        //start timeren (klikk på startknapp)
        //vis tiden (sett minutter og sekunder inn på siden)
        //tell tiden ned (trekk sekunder/minutter fra)
        //gørt dette hvert sekund, og husk og sjekke om alarmen skal ringe (tick) 