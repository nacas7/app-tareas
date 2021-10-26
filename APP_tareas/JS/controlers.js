//guardar tarea ACUERDATE DE PONER ESTA HOJA EN EL INDEX

function saveTask(pTask, pTaskList) {
    let result = 0;
    const existTask = pTaskList.filter(task => task.task === pTask.task.toLowerCase());

    if (existTask.length === 0) {
        result = pTaskList.push(pTask);
    }
    // console.log(result);
    if (result !== 0) {
        return true;
    } else {
        return false;
    }
}

function deleteArray(pId, pTaskList) {

    let position = pTaskList.findIndex(task => task.id === pId)

    if (position != -1) {

        pTaskList.splice(position, 1);
        // console.log(pTaskList);
        return true;
    }
    return false;
}

// function searchByWord(pTaskList, pWord) {
//     const filterList = pTaskList.filter(task => {
//         return task.task.toLowerCase().includes(pWord.toLowerCase())
//     })

//     return filterList;

// }