 App.controller('SubjectController', [
  '$scope','Data', 
  function ($scope,Data) {
  $scope.subjectTable=true;
 
     Data.get("subjects").then(function(data){
      $scope.subjectData=data;
      })


  $scope.addSubject=function(data){
     Data.post("subjects",data).then(function(result){
          if(result.status=="success"){
              $scope.subjectData.push(data);
              $scope.subjectTable=true;
              $scope.addNewSubject=false;
          }
          else {
          }
     })
  } 

  $scope.updateSubject=function(data){
     Data.patch("subjects/"+data._id,data).then(function(result){
     })
     $scope.subjectTable=true;
     $scope.editSubjectForm=false;
  }
    
  $scope.editSubject=function(data){
          $scope.editData=data;
          $scope.subjectTable=false;
          $scope.editSubjectForm=true;
  }

       $scope.deleteSubject = function(data) {
        var isConfirmed = confirm("Are you sure to delete this subject ?");
         if(isConfirmed){
           Data.delete("subjects/"+data._id).then(function(result){
            Data.get("subjects").then(function(data){
             $scope.subjectData=data;
             })
        })
      }
      }    
  }
]);
