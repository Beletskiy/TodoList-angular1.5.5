function TodoListController() {

}
angular.module('todoApp').component('todoList', {
    templateUrl: 'components/todoList.html',
    controller: TodoListController,
    bindings: {
        todo: '<'
    }
});
