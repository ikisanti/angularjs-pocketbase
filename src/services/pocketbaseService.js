crmApp.service('PocketbaseService', ['$http', function($http) {
    const baseUrl = 'http://localhost:8090/api/collections';

    this.addClient = function(client) {
        return $http.post(`${baseUrl}/Clients/records`, client);
    };

    this.getClients = function() {
        return $http.get(`${baseUrl}/Clients/records`);
    };
}]);
