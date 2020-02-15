 App.controller('RoomController', [
  '$scope','Data', 
  function ($scope,Data) {
  $scope.roomTable=true;

 
     Data.get("rooms").then(function(data){
   		$scope.roomData=data;
      })


  $scope.addRoom=function(data){
     Data.post("rooms",data).then(function(result){
          if(result.status=="success"){
              $scope.roomData.push(data);
              $scope.roomTable=true;
              $scope.addNewRoom=false;
          }
          else {
          }
     })
   
  } 

  $scope.updateRoom=function(data){
     Data.patch("rooms/"+data._id,data).then(function(result){
     })
     $scope.roomTable=true;
     $scope.editRoomForm=false;
  }
    
  $scope.editRoom=function(data){
          $scope.editData=data;
          $scope.roomTable=false;
          $scope.editRoomForm=true;
  }

   $scope.deleteRoom = function(data) {
    var isConfirmed = confirm("Are you sure to delete this forum ?");
     if(isConfirmed){
       Data.delete("rooms/"+data._id).then(function(result){
        Data.get("rooms").then(function(data){
         $scope.roomData=data;
         })
    })
  }
  }    

  }
]);
