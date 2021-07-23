export class TodoList {




  constructor() {

    this.todos = [];


  }

  nuevoTodo(todo) {
    this.todos.push(todo);


  }


  eliminarTodo(id) {
    // documentación de filter
    // https://developer.mozilla.org/es/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/filter


    this.todos = this.todos.filter(todo => todo.id != id)
  }


  marcarCompletado(id) {
    for (const todo of this.todos) {

      console.log(id, todo.id);

      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }

  }


  eliminarCompletados() {

    this.todos = this.todos.filter(todo => !todo.completado)


  }
}