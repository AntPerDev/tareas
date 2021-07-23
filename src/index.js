import './styles.css';
import { crearTodoHtml} from './js/componentes';

import { Todo,TodoList } from './classes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
// from ./classes al no poner nada más busca el 
// index.js y ya es puede importar todo de ahi
// mirar archivo index.js dentro de ./classes

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!!'); 
// const tarea2 = new Todo('Comprar unicornio'); 

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);
// tarea.completado=true;
// console.log(todoList);

// crearTodoHtml( tarea );


// localStorage.setItem('mi-key','ABC-123');
// sessionStorage.setItem('mi-key','ABC-123');

// setTimeout(() => {
//   localStorage.removeItem('mi-key');
// }, 1500);

todoList.todos[0].imprimirClase();


// todoList.todos.forEach(todo  => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);


console.log('todos',todoList.todos);