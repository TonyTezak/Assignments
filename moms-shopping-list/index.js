const form = document.addItem

form.addEventListener("submit", function(){
    event.preventDefault()
    const letsShop = document.getElementById("list")
    const addList = form.favSon.value
    
    const biggerList = document.createElement("li")
    const listItem = document.createElement("div")
        listItem.textContent = addList
    const editButton = document.createElement("button")
        editButton.textContent = "edit"
    const byeByeButton = document.createElement("button")
        byeByeButton.textContent = "X"   
        byeByeButton.classList.add("byeBye")
        byeByeButton.addEventListener("click", function(event){
        event.target.parentNode.remove()
    })
        letsShop.append(biggerList)
        biggerList.append(listItem)
        biggerList.append(editButton)
        biggerList.append(byeByeButton)
 
    form.favSon.value = ""
})
/*var eatFood = document.getElementsByClassName("byeBye")
for (i = 0; i < eatFood.length; i++){
    eatFood[i].addEventListener("click", function(event){
        this.parentNode.remove()
    })}

/*var eatFood = document.getElementsByClassName("byeBye");
if (eatFood.removeEventListener("click", function()){
    listItem.textContent = ""
})

/* document.getElementsByClassName("byeBye").removeEventListener("click", function(){
    listItem.textContent = ""
})
    //listItem.textContent = ""


    


    //if (document.getElementsByClassName("byeBye").addEventListener("click", function()*/