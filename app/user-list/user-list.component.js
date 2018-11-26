angular
    .module('userList')
    .component('userList',{
        templateUrl: 'user-list/user-list.template.html',
        controller: function UserListController($http) {
            var self = this;
            self.orderProp = 'name';

            $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
                self.users = response.data;
            });
        }
    })