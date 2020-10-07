
    function getToDos(){
        axios.get("https://api.vschool.io/tonytezak/todo")
            .then(response => createToDo(response.data))
            .catch(error => console.log(error))
    }
 
    function createToDo(data){
        clearToDos()
       for(let i = 0; i < data.length; i++){
            const container = document.createElement("div")
            const h1 = document.createElement('h1')
            const image = document.createElement('img') 
            const completeBox = document.createElement("input")
            const deleteButton = document.createElement("button")
        
            image.setAttribute("src", data[i].imgUrl)
            image.setAttribute("height", "100px")
            image.setAttribute("width", "100px")

            completeBox.setAttribute('type', 'checkbox')

            h1.textContent = data[i].title
            deleteButton.textContent = "Delete"

            const completeDiv = document.createElement("div")    
            const completeLabel = document.createElement("label")
            completeLabel.textContent = "Complete"

            completeDiv.appendChild(completeLabel)
            completeDiv.appendChild(completeBox)
            completeDiv.style.padding = "5px"

            toDoList.appendChild(container)
            container.appendChild(h1)
            container.appendChild(image)
            container.appendChild(completeDiv)
            container.appendChild(deleteButton)

            container.style.border = "ridge"
            container.style.borderColor = "blue"
            container.style.borderRadius = "3px"
            container.style.padding = "15px 75px 25px"
            container.style.backgroundColor = "burlywood"

            let itsComplete = {
                completed: true
            }
            completeBox.addEventListener("click", function(){
                h1.style.textDecoration = "line-through"
                axios.put(`https://api.vschool.io/tonytezak/todo/${data[i]._id}`, itsComplete)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
                })

            deleteButton.addEventListener("click", function(){
                toDoList.removeChild(container)
                axios.delete(`https://api.vschool.io/tonytezak/todo/${data[i]._id}`)
                    .then(response => createToDo(response.data))
                    .catch(error => console.log (error))
            })
                }
                    }

    function clearToDos () {
        const oldToDoList =  document.getElementById('toDoList')
        while (oldToDoList.firstChild){
            oldToDoList.removeChild(oldToDoList.firstChild)
        }
    }

    getToDos()

    const toDoForm = document.toDoForm
    toDoForm.addEventListener ("submit", function(event){
        event.preventDefault()

        const seeToDo = {
            title: toDoForm.title.value,
            price: toDoForm.price.value,
            description: toDoForm.description.value,
            imgUrl: toDoForm.imgUrl.value
            }

            toDoForm.title.value = ""
            toDoForm.price.value = ""
            toDoForm.description.value = ""
            toDoForm.imgUrl.value = ""

            axios.post("https://api.vschool.io/tonytezak/todo", seeToDo)
            .then(response => getToDos(response.data))
            .catch(error => console.log (error))

    for(let i = 0; i < getToDos.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
        document.body.appendChild(image)
    }
    })     

    const titleDiv = document.createElement("div")
    const pageTitle = document.createElement("h1")
        pageTitle.textContent = "The Big To Do"
        pageTitle.style.textAlign = "center"
        pageTitle.style.backgroundColor = "green"
        pageTitle.style.color = "white"
            toDoForm.appendChild(titleDiv)
            titleDiv.appendChild(pageTitle)
    
    