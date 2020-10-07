const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    event.preventDefault()
})
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent.value = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
} 
function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("onchange", function(e){
       if (e.target.parent.value = "red"){
           document.getElementById("input").style.background = "red"
       }else if (e.target.parent.value = "blue"){
        document.getElementById("input").style.background = "blue"
       }else if (e.target.parent.value = "green"){
        document.getElementById("input").style.background = "green"
       }
       
        //e.target.parent.backgroundColor = e.target.value
        //e.parent.value.style = backgroundColor;
    })
    return dropDown

}

