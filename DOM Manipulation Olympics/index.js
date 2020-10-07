const newHeader = document.createElement("div");
document.getElementById("header").appendChild(newHeader);
newHeader.className = "header";

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const h3 = document.createElement("h3");
h3.style.display = "inline"
h3.innerHTML = '<span class="name">Tony </span><span> wrote the JavaScript.</span>';
document.getElementById("header").appendChild(h3);
h3.className = "header";

newHeader.appendChild(h1);
newHeader.appendChild(h3);

const chatsOne = document.getElementsByClassName("message left")
const chatsTwo = document.getElementsByClassName("message right")
chatsOne[0].textContent = "You go first!"
chatsTwo[0].textContent = "Please, after you!"
chatsOne[1].textContent = "No, you first! I insist!"
chatsTwo[1].textContent = "It would be my pleasure to see you go first!"

var byeBye = document.getElementById("clear-button")
byeBye.addEventListener("click", clearMessage);

function clearMessage (){
    chatsOne[0].textContent = ""
        chatsOne[0].style.backgroundColor = "initial"
    chatsTwo[0].textContent = ""
        chatsTwo[0].style.backgroundColor = "initial"
    chatsOne[1].textContent = ""
        chatsOne[1].style.backgroundColor = "initial"
    chatsTwo[1].textContent = ""
        chatsTwo[1].style.backgroundColor = "initial"
    }

