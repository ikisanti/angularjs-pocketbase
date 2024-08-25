crmApp.controller('ClientController', ['$scope', 'PocketbaseService', function ($scope, PocketbaseService) {
    $scope.client = {
        name: '',
        email: '',
        phone: '',
        address: '',
        created_at: new Date().toISOString()
    };

    $scope.clients = [];

    $scope.addClient = function () {
        PocketbaseService.addClient($scope.client)
            .then(function (response) {
                alert('Client added successfully');
                $scope.client = { name: '', email: '', phone: '', address: '', created_at: new Date().toISOString() };
            })
            .catch(function (error) {
                console.error('Error adding client:', error);
            });
    };

    $scope.getClients = function () {
        PocketbaseService.getClients()
            .then(function (response) {
                $scope.clients = response.data.items;
            })
            .catch(function (error) {
                console.error('Error getting clients:', error);
            });
    };

    $scope.getClients();
}]);
