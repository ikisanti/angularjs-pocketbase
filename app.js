const crmApp = angular.module('crmApp', ['ngRoute']);

crmApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/add-client', {
            templateUrl: 'src/views/add-client.html',
            controller: 'ClientController'
        })
        .when('/list-clients', {
            templateUrl: 'src/views/list-clients.html',
            controller: 'ClientController'
        })
        .otherwise({
            redirectTo: '/list-clients'
        });
}]);
