function TodoListController(Todo) {
    //console.log(Todo.query());
    this.todoList = Todo.query();
}

TodoListController.$inject = ['Todo'];
angular.module('todoApp').component('todoList', {
    templateUrl: 'components/todoList.html',
    controller: TodoListController
});
