var App = angular.module('App', ['ui.router','LocalStorageModule','angular-jwt']);

App.factory('AuthenticationService', Service)
App.run(run);

function run($rootScope, $http, $location, localStorageService, $state) {
        if (localStorageService.get("token")) {
             $http.defaults.headers.common.Authorization = 'Bearer ' + localStorageService.get('token');
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if (!localStorageService.get("token")) {
                $location.path('/login'); 
            }
            if($location.url()=="/login" && localStorageService.get("token")){
                $location.path('/home'); 
            }
        });
    }

 function Service($http,localStorageService,Data) {
        var service = {};
        service.Login = Login;
        return service;

        function Login(email, password,callback) {
            Data.post("users/"+email+"/"+password).then(function(response){           
                    if (response.token){
                       localStorageService.set('user',response.email);
                       localStorageService.set('token',response.token);
                       localStorageService.set('username',response.fullname);
                       localStorageService.set('id',response._id);
                       localStorageService.set('type',response.type);
                       $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
               
        }

    }
