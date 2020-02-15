 App.controller('TeacherController', [
  '$scope','Data', 
  function ($scope,Data) {
  $scope.teacherTable=true;
 
     Data.get("teacher").then(function(data){
      $scope.teacherData=data;
      })


  $scope.addTeacher=function(data){
     Data.post("teacher",data).then(function(result){
          if(result.status=="success"){
              $scope.teacherData.push(data);
              $scope.teacherTable=true;
              $scope.addNewTeacher=false;
          }
          else {
          }
     })
  } 

  $scope.updateTeacher=function(data){
     Data.patch("teacher/"+data._id,data).then(function(result){
     })
     $scope.teacherTable=true;
     $scope.editTeacherForm=false;
  }
    
  $scope.editTeacher=function(data){
          $scope.editData=data;
          $scope.teacherTable=false;
          $scope.editTeacherForm=true;
  }

       $scope.deleteTeacher = function(data) {
        var isConfirmed = confirm("Are you sure to delete this teacher ?");
         if(isConfirmed){
           Data.delete("teacher/"+data._id).then(function(result){
            Data.get("teacher").then(function(data){
             $scope.teacherData=data;
             })
        })
      }
      }    
  }
]);
