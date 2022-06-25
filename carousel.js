// user info modal controller

myModule.controller(
  "carouselInstanceCtrl",
  function ($scope, $uibModalInstance, userInfoList, index) {
    console.log("userlist", userInfoList);
    console.log("id", index);
    $scope.test = "anchal";
    $scope.getAge = function (dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };
    $scope.getCorrectDate = function(dateString){
      console.log("date", dateString);
      var date = new Date(dateString.toString().replace('IST', ''));

      let day = date.getDate();
      let month = date.getMonth()+1;
      let year = date.getFullYear();
      var varDate = month+"/"+day+"/"+year;
      return varDate;
    }
    var j;
    for(j=0;j<userInfoList.length;j++)
    {
      if (userInfoList.find(() => index == userInfoList[j].id)) {
        $scope.name = userInfoList[j].name;
        $scope.email = userInfoList[j].email;
        $scope.dob = $scope.getAge(userInfoList[j].dob);
        $scope.phone = userInfoList[j].phone;
        $scope.address = userInfoList[j].address;
        $scope.details = userInfoList[j].details;
        $scope.slider1 = userInfoList[j].slider1;
        $scope.slider2 = userInfoList[j].slider2;
        $scope.slider3 = userInfoList[j].slider3;
        break;
      }
    }
 
    $scope.languages="";
    for(let i=0;i<userInfoList[j].languages.length;i++)
    { 
      let s="";
      if(i==userInfoList[j].languages.length-1)
      {
        s=userInfoList[j].languages[i];
      }
      else{
        s=userInfoList[j].languages[i] +", " ;
      }
      $scope.languages+=s;
    }
    $scope.closeCarousel = function(){
      console.log("close carousel");
      $uibModalInstance.close();
    }
  }
);
