export const state = {
    taskList:{
        items:[],
        count:0,
        isEmpty:true,
    },
    doneList:{
        items:[],
        count:0,
        isEmpty:true,
    },
}

export function addTodo(text, done = false){
     const id = crypto.randomUUID().slice(-6);
     const todo = {
        id:id,
        text:text,
        done:done
     }
     state.taskList.items.push(todo)
     return todo;
}
// toggleDone() {
//     this.done = !this.done;
// }

// edit(newText) {
//     this.text = newText;
// }