angular.
    module('demoApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/users', {
                    template: '<user-list></user-list>'
                }).
                when('/user/:userId/:seed', {
                    template: '<user-detail></user-detail>'
                }).
                otherwise('/users');
        }
    ]);