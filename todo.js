function todoController($scope) {
    $scope.todos = [
        {text: "Give a presentation on Angular", done: false},
        {text: "Eat free pizza", done: false},
        {text: "Win Chewie's affection", done: false},
        {text: "Eat breakfast", done: false}
    ]

    $scope.getUndoneTodos = function () {
        return $scope.todos.length - $scope.getDoneTodos();
    }

    $scope.getDoneTodos = function () {
        var done = 0;
        angular.forEach($scope.todos, function(todo) {
            done += todo.done ? 1 : 0;
        })
        return done;
    }

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.todoText, done: false})
        $scope.todoText = '';
    }

    $scope.pluralizeIt = function () {
        if ($scope.getUndoneTodos() > 1) {
            return 's';
        } else {
            return '';
        }
    }

    $scope.pruneTodos = function () {
        $scope.todos = $scope.todos.filter(function(todo) { return !todo.done });
    }
}

