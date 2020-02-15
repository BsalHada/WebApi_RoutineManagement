 App.controller('RoutineController', [
  '$scope','Data', 
  function ($scope,Data) {
  $scope.routineTable=true;
 
     Data.get("routine").then(function(data){
      $scope.routineData=data;
      })

      Data.get("subjects").then(function(data){
       $scope.subjectData=data;
      })

      Data.get("rooms").then(function(data){
       $scope.roomData=data;
  	 })
        Data.get("batch").then(function(data){
      $scope.batchData=data;
      })


  $scope.addRoutine=function(data){
  	      data.date=moment(data.date).format('YYYY-MM-DD');
          Data.post("routine",data).then(function(result){
          if(result.status=="success"){
              Data.get("routine").then(function(data){
      $scope.routineData=data;
      })
              $scope.routineTable=true;
              $scope.addNewRoutine=false;

          }
          else {
          }
     })     
  } 

  $scope.updateRoutine=function(data){
  	      data.date=moment(data.date).format('YYYY-MM-DD');
         Data.patch("routine/"+data._id,data).then(function(result){
         	 Data.get("routine").then(function(data){
      $scope.routineData=data;
      })
         })
     $scope.routineTable=true;
     $scope.editRoutineForm=false;
  }
    
  $scope.editRoutine=function(data){
  	      data.date=moment(data.date).format('YYYY-MM-DD');
          $scope.editData=data;
          console.log(data);
          $scope.routineTable=false;
          $scope.editRoutineForm=true;
    }

       $scope.deleteRoutine = function(data) {
        var isConfirmed = confirm("Are you sure to delete this routine ?");
         if(isConfirmed){
           Data.delete("routine/"+data._id).then(function(result){
            Data.get("routine").then(function(data){
             $scope.routineData=data;
             })
        })
      }
      }    
  }
]);
