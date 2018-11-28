angular
    .module('userList')
    .component('userList',{
        templateUrl: 'user-list/user-list.template.html',
        controller: ['$http',
            function UserListController($http) {
                var self = this;

                /* $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) { */
                $http.get('https://randomuser.me/api/?results=50&nat=ES').then(function (response) {
                    self.users = response.data.results;
                });
                self.orderProp = 'name.first';
            }
        ]
    })