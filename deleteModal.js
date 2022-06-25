
//delete modal controller

myModule.controller(
    "deleteModalInstanceCtrl",
    function ($scope, deleteUser, idx, $uibModalInstance) {
      $scope.deleteMe = function () {
        console.log("delete id", idx);
        deleteUser.forEach((user, index) => {
          if (user.id == idx) {
            deleteUser.splice(index, 1);
            $uibModalInstance.close(deleteUser.length);
          }
        });
        // $scope.totalItems = $scope.userlist.length;
        // $scope.pagination();
      };
      $scope.changeColor = function () {
        deleteUser.forEach((user) => {
          if (user.id == idx) {
            user.flag = false;
            // console.log("changecolor", user);
          }
          $uibModalInstance.close(deleteUser.length);
        });
      };
  
      $scope.closeDltModal = function () {
        $uibModalInstance.close();
      };
    }
  );
  