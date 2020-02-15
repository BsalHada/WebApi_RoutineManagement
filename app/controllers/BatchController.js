 App.controller('BatchController', [
  '$scope','Data', 
  function ($scope,Data) {
  $scope.batchTable=true;
 
     Data.get("batch").then(function(data){
      $scope.batchData=data;
      })


  $scope.addBatch=function(data){
     Data.post("batch",data).then(function(result){
      // console.log(result);
          if(result.status=="success"){
              $scope.batchData.push(data);
              $scope.batchTable=true;
              $scope.addNewBatch=false;
          }
          else {
          }
     })
   
  } 

  $scope.updateBatch=function(data){
     Data.patch("batch/"+data._id,data).then(function(result){
     })
     $scope.batchTable=true;
     $scope.editBatchForm=false;
  }
    
  $scope.editBatch=function(data){
          $scope.editData=data;
          $scope.batchTable=false;
          $scope.editBatchForm=true;
  }

   $scope.deleteBatch = function(data) {
    var isConfirmed = confirm("Are you sure to delete this batch ?");
     if(isConfirmed){
       Data.delete("batch/"+data._id).then(function(result){
        Data.get("batch").then(function(data){
         $scope.batchData=data;
         })
    })
  }
  }    

  }
]);
