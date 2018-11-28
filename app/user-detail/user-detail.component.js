angular.
    module('userDetail').
    component('userDetail', {
        templateUrl: 'user-detail/user-detail-template.html',
        controller: ['$http', '$routeParams',
            function UserListController($http,$routeParams) {
                this.userId = $routeParams.userId;
                this.seed = $routeParams.seed;
                var self = this;

                $http.get('https://randomuser.me/api/?results=50&seed={{self.seed}}&nat=ES').then(function (response) {
                    self.user = response.data.results[self.userId];                    
                });
            }
        ]
    });