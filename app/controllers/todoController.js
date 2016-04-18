var todoControllers = angular.module('todoControllers', []);
todoControllers.controller('TodoCtrl',['$scope', 'Todo', function($scope, Todo) {
    //$scope.todoList = [{todoText:'Clean House', done:false}];
    $scope.todoList = Todo.query();

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
}]);
