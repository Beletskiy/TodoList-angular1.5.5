function TodoAppController(Todo) {
    this.todoList = Todo.query();
    this.getRemaining = function () {
        var remainingTodo = 0;
        this.todoList.forEach(function (item, i, arr) {
            if (arr[i].done === false) {
                remainingTodo++;
            }
        });
        return remainingTodo
    };
    this.remove = function () {
        var oldList = this.todoList;
        var self = this;
        this.todoList = [];
        angular.forEach(oldList, function (todo) {
            if (!todo.done) {
                self.todoList.push(todo);
            }
        });
    };
    this.finalAdd = function(todo) {
        this.todoList.push({
            "todoText": todo,
            "done":false
        });
    };
}
TodoAppController.$inject = ['Todo'];  // if I comment this  - change nothing
angular.module('todoApp').component('todoApp', {
    templateUrl: 'components/todoApp.html',
    controller: TodoAppController
});