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
        angular.forEach(oldList, function (x) {
            if (!x.done) {
                self.todoList.push(x);
            }
        });
    };
    this.addTodo = function(todo) {
        this.todoList.push(todo);
        console.log(todo,'addTodo');
    };
}

TodoAppController.$inject = ['Todo'];  // if I comment this  - change nothing
angular.module('todoApp').component('todoApp', {
    templateUrl: 'components/todoApp.html',
    controller: TodoAppController
});