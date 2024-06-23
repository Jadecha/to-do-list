const tareas = [];
const listaDeTareas = document.getElementById("lista");
document.getElementById('guardar').addEventListener('click', function() {
let nuevaTarea = document.getElementById('input').value;
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        for(let i = tareas.length-1 ; i<tareas.length ; i++){
            const li = document.createElement("li");
            const button = document.createElement("button");
            li.textContent = tareas[i];
            button.textContent = "Pendiente";
            li.appendChild(button)
            button.classList.add("pendiente-btn");
            button.addEventListener('click', function() {
                button.textContent = "Completado";
                button.classList.add("completado-btn");
            });
            listaDeTareas.appendChild(li);
        };
    }
});