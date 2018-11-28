angular
    .module('userList')
    .component('userList',{
        templateUrl: 'user-list/user-list.template.html',
        controller: ['$http',
            function UserListController($http) {
                var self = this;

                $http.get('https://randomuser.me/api/?page=1&results=50&seed=yam&nat=ES').then(function (response) {
                    self.users = response.data.results;
                    self.seed = response.data.info.seed;
                });
                self.orderProp = 'name.first';
            }
        ]
    })