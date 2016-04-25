function TodoFormController() {
    this.addTodo = function () {
        this.mainAddTodo({fieldValue: this.fieldValue});
        this.fieldValue = '';
    }
}
angular.module('todoApp').component('todoForm', {
    templateUrl: 'components/todoForm.html',
    controller: TodoFormController,
    bindings: {
        mainAddTodo: '&'
    }
});