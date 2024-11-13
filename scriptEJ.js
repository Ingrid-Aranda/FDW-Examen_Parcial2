function addTask(){
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const selectorC = document.getElementsByTagName("select");

    if(taskInput.value.trim()){
        const card = document.createElement("div");
        
        if (selectorC[0].value == "1") {
            card.style.backgroundColor = "red";
            card.classList.add("card");
        }else{
            if (selectorC[0].value == "2") {
                card.style.backgroundColor = "yellow";
                card.style.color = "black";
                card.classList.add("card");
            }
            else{
                card.style.backgroundColor = "green";
                card.classList.add("card");
            }
        }
        
        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            const confirmacion = window.confirm("¿Deseas eliminar la tarea?");
            if(confirmacion){
                container.removeChild(card);
            }
        }

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}