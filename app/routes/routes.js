

App.config(function ($stateProvider,$urlRouterProvider) {
 
 $stateProvider.state('home', {
        'url': '/home',
        'templateUrl': 'app/templates/home.html',
        'controller': 'HomeController'
    });

  $stateProvider.state('subjects', {
        'url': '/subjects',
        'templateUrl': 'app/templates/subjects.html',
        'controller': 'SubjectController'
    });

    $stateProvider.state('blogs', {
        'url': '/batch',
        'templateUrl': 'app/templates/batch.html',
        'controller': 'BatchController'
    });  
   
       $stateProvider.state('rooms', {
        'url': '/rooms',
        'templateUrl': 'app/templates/room.html',
        'controller': 'RoomController'
    });
     $stateProvider.state('teachers', {
        'url': '/teachers',
        'templateUrl': 'app/templates/teachers.html',
        'controller': 'TeacherController'
    });
     $stateProvider.state('routine', {
        'url': '/routine',
        'templateUrl': 'app/templates/routine.html',
        'controller': 'RoutineController'
    });

   $stateProvider.state('login', {
        'url': '/login',
        'templateUrl': 'app/templates/login.html',
        'controller': 'LoginController'
    });
    
       $urlRouterProvider.otherwise('/home');
});


