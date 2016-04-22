function TodoFormController(Todo,$scope) {

}
angular.module('todoApp').component('todoForm', {
    templateUrl: 'components/todoForm.html',
    controller: TodoFormController,
    bindings: {
        addTodo: '&'
    }
});