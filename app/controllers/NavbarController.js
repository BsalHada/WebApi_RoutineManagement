 function NavbarController(Data,$scope,$state,localStorageService,$http) {
      var nav = this;
      nav.loginButtonShow=true;
      nav.logoutButtonShow=false;
      nav.logout=logout;
      $scope.username=localStorageService.get('username');
      $scope.userid=localStorageService.get('id');
      $scope.userType=localStorageService.get('type');
      $scope.userEmail=localStorageService.get('user');
      if($scope.username){
        nav.logoutButtonShow=true;
        if($state.current.name=='login'){
          $state.go('home');
        }
      nav.loginButtonShow=false;
      }

   function logout(){
    Data.patch("users/"+localStorageService.get('user')).then(function(response){
      // console.log(response);
     localStorageService.remove("token");
     localStorageService.remove("user");
     localStorageService.remove("username");
     localStorageService.remove("id");
      $state.go('login');
    })
   
   }
    }


     function SidebarController(Data,$scope,$state,localStorageService,$http) {
      
    }