let valueDisplays = document.querySelectorAll('.num')
// let end = document.querySelectorAll('.num').getAttribute("data-val")
let interval = 4000;

valueDisplays.forEach((ValueDisplay) => {
    let startValue =0;
    let endValue = parseInt(ValueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        ValueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});