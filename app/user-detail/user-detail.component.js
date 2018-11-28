angular.
    module('userDetail').
    component('userDetail', {
        templateUrl: 'user-detail/user-detail-template.html',
        controller: ['$http', '$routeParams',
            function UserListController($http,$routeParams) {
                this.username = $routeParams.username;
                this.seed = $routeParams.seed;
                var self = this;

                $http.get('https://randomuser.me/api/?page=1&results=50&seed=yam&nat=ES').then(function (response) {
                    findUsername = response.data.results.filter(user => user.login.username === $routeParams.username);
                    self.user = findUsername[0];                    
                });
            }
        ]
    });