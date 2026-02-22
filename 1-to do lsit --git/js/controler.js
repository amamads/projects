// *______ imports ______*
import * as model from './model.js';
import todoView from './view/todoView.js';


function controlAddTodo(text) {
    // *______ set and save todo ______*
    const dataTodo = model.addTodo(text);

    // *______ render ______*
    todoView.render(dataTodo);

}



(init => {
    todoView.addHandlerAddTodo(controlAddTodo);

})()