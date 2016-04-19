var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('Todo', ['$resource',
    function ($resource) {
        return $resource('todos/:todoId.json', {}, {
            query: {method: 'GET', params: {todoId: 'todos'}, isArray: true}
        });
    }]);