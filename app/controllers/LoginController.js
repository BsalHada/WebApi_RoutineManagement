 App.controller('LoginController', [
  '$scope','Data','localStorageService','$state','$http','AuthenticationService', 
  function ($scope,Data,localStorageService,$state,$http,AuthenticationService) {

 $scope.user={};
  $scope.loginFormm=true;
   $scope.login=function(userData){

   AuthenticationService.Login(userData.email, userData.password,function (result){
                if (result === true) {
                    $state.go("home");
                } else {
                     $scope.successmsg="Invalid credintials.";
                }
            });
   }

   $scope.signup=function(data){
    Data.post("users/"+data.email).then(function(rep){
      if(rep.length>0){
        $scope.errormsg="Email already registered.";
        return;
      }
      else {

        Data.post("users",data).then(function(rep){
        if(rep.status=="success"){
        $scope.user.email=data.email;
        $scope.successmsg="Successfully registered. Login to continue.";
        $scope.loginFormm=true;
        $scope.registerFormm=false;
      }
      else {

      }
      })
      }
    })

    
   }
  
 
  
  }
]);
