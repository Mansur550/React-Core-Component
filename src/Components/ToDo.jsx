// export default function ToDo({task}) {

//     return(
//         <li>Task:{task}</li>
//     )
// }

// export default function ToDo({ task, isDone }) {

//     if (isDone === true) {
//         return <li>Done: {task}</li>

//     } else {
//         return < li>Pending: {task}</li>

//     }
// }


//Ternary operator

export default function ToDo({ task, isDone }) {
    return isDone ? <li>Done:{task}</li> : <li>Pending:{task}</li>
}
