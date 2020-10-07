
const clickAnywhere = document.getElementById("aimClick");
    count = 0;
const clickCount = document.addEventListener("click", function(){
    count += 1;
    aimClick.innerHTML = count;
    const keepIt = localStorage.setItem("stayKey", count);
    return keepIt;
 });

const keepItLonger = localStorage.getItem("stayKey");
    document.getElementById("aimClick").append(keepItLonger);
