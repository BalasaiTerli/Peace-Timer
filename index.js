let timer = document.getElementById("timer");
let first = document.getElementById("firstBtn");
let second = document.getElementById("secondBtn");
let third = document.getElementById("thirdBtn");
let fourth = document.getElementById("fourthBtn")
let content = document.getElementById("content");
let firstBtn = 20;
let secondBtn = 30;
let thirdBtn = 40;
let fourthBtn = 60;
first.onclick = function(){
    let stop = setInterval(function(){
        firstBtn-=1;
        timer.textContent = firstBtn + " "+ "seconds left";
         if (firstBtn === 0) {
            timer.textContent = " ";
           content.textContent = "completed";
            clearInterval(stop);
         }
    },1000);
}

second.onclick = function () {
   let stop = setInterval(function () {
    secondBtn -= 1;
    timer.textContent = secondBtn + " " +"seconds left";
     if (secondBtn === 0) {
        timer.textContent = " ";
       content.textContent = "completed";
       clearInterval(stop)
     }
  }, 1000);
};

third.onclick = function(){
    let stop = setInterval(function(){
        thirdBtn-=1;
        
        timer.textContent = thirdBtn + " " + "seconds left";
         if (thirdBtn === 0) {
            timer.textContent = " ";
           content.textContent = "completed";
            clearInterval(stop);
         }
    },1000);
}

fourth.onclick = function () {
  let stop = setInterval(function () {
    fourthBtn -= 1;
    timer.textContent = fourthBtn + " "+ "seconds left";
    if (fourthBtn===0){
        timer.textContent =" ";
        content.textContent = "completed";
         clearInterval(stop);
    }
  }, 1000);
};