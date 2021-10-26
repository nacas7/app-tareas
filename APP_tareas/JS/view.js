let sectionTareas = document.querySelector('.setenta #tareas');//donde se pinta


//pintar tareas

printTask(taskList, sectionTareas);

function printTask(pTaskList, pSection) {
    pTaskList.forEach(task => saveOneTask(task, pSection))


}
function saveOneTask(pTask, pSection) {
    let article = document.createElement('article');

    let borrar = document.createElement('p');
    borrar.innerText = pTask.task;
    borrar.dataset.id = pTask.id;
    borrar.addEventListener('click', deleteTask);

    article.id = 'task_' + pTask.id;

    article.appendChild(borrar);

    pSection.appendChild(article);

}

function deleteTask(event) {
    let result = deleteArray(parseInt(event.target.dataset.id), taskList)
    if (result) {
        let deleteArticle = document.querySelector('#task_' + event.target.dataset.id)

        deleteArticle.parentNode.removeChild(deleteArticle);

        return false;
    }
    alert('No se ha borrado la tarea')

}

//recoger información y enviar a función
let btnSave = document.querySelector('#btnSave')//donde se hace el evento btn
let inputTareas = document.querySelector('#save');//donde escribo
let id = 4;

btnSave.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();
    let result;
    const newTask = {
        id: 0,
        task: ""
    }
    // localStorage.setItem(getDataForm, 'id')
    //día 18 clase minuto 7

    if (inputTareas.value !== "") {
        newTask.id = id;
        newTask.task = inputTareas.value;

        result = saveTask(newTask, taskList)
    } else {
        alert('Hay que escribir una tarea')
    }


    if (result) {
        saveOneTask(newTask, sectionTareas);
        id++;
    } else {
        alert('La tarea no se ha podido guardar, puede que esté duplicada la tarea')
    }


    inputTareas.value = "";
}

// const inputSearch = document.querySelector('#search');//donde busco la tarea

// inputSearch.addEventListener('input', (event) => {
//     printTask(searchByWord(taskList, event.target.value), sectionTareas)
// });




