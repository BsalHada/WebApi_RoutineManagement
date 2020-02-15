
App.factory("Data", ['$http', '$location',
    function ($http, $query, $location) {
       var serviceURL = 'http://localhost:3000/';
        var httpObject = {};
        httpObject.get = function (query) {
           return $http.get(serviceURL + query).then(function (results) {
                return results.data;
            });
        };
       
        httpObject.post = function (query, httpObjectt) {
            return $http.post(serviceURL + query, httpObjectt).then(function (results) {
                return results.data;
            });
        };
    
        httpObject.patch = function (query, httpObjectt) {
            return $http.patch(serviceURL + query, httpObjectt).then(function (results) {
                return results.data;
            });
        };
        httpObject.delete = function (query) {
            return $http.delete(serviceURL + query).then(function (results) {
                return results.data;
            });
        };
        return httpObject;
}])