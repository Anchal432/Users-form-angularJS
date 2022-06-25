myModule.controller(
    "ModalInstanceCtrl",
    function ($scope, toaster, $uibModalInstance, users, $timeout) {
      $scope.refreshSlider = function () {
        $timeout(function () {
          $scope.$broadcast("rzSliderForceRender");
        });
      };
  
      $scope.details = [
        {
          degree: "",
          institute: "",
          startDate: "",
          endDate: "",
          percentage: "",
          popupOpened: { popup2: false, popup3: false },
        },
      ];
      if (users != undefined) {
        var date = new Date(users.editDob);
        $scope.ngName = users.editName;
        $scope.ngEmail = users.editEmail;
        $scope.ngPhone = users.editPhone;
        $scope.dt = date;
        $scope.gender = users.editGender;
        $scope.ngAddress = users.editAddress;
        $scope.ngLanguages = users.editLanguage;
        $scope.details = users.editDetails;
        $scope.skills = users.editSkills;
        $scope.slider1 = users.editSlider1;
        $scope.slider2 = users.editSlider2;
        $scope.slider3 = users.editSlider3;
      }
  
      $scope.open1 = function () {
        $scope.popup1.opened = true;
      };
  
      $scope.open2 = function ($index) {
          console.log("popup22222",$scope.details[$index] );
        $scope.details[$index].popupOpened.popup2 = true;
      };
  
      $scope.open3 = function ($index) {
        $scope.details[$index].popupOpened.popup3 = true;
      };
  
      $scope.format = "dd-MMMM-yyyy";
      $scope.altInputFormats = ["M!/d!/yyyy"];
  
      $scope.popup1 = {
        opened: false,
      };

      
  
      $scope.pop = function (given) {
        toaster.pop("warning", "Please fill your " + given);
      };
  
      $scope.addRow = function ($index) {
        $scope.temp = true;
        for (var i = 0; i <= $index; i++) {
          if ($scope.details[i].degree == "") {
            $scope.pop(`degree in row ${i + 1}`);
            $scope.temp = false;
            break;
          } else if ($scope.details[i].institute == "") {
            $scope.pop(`institute in row ${i + 1}`);
            $scope.temp = false;
            break;
          } else if ($scope.details[i].startDate == "") {
            $scope.pop(`date of joining in row ${i + 1}`);
            $scope.temp = false;
            break;
          } else if ($scope.details[i].endDate == "") {
            $scope.pop(`date of leaving in row ${i + 1}`);
            $scope.temp = false;
            break;
          } else if (
            $scope.details[i].percentage == "" ||
            $scope.details[i].percentage == null
          ) {
            $scope.pop(`percentage in row ${i + 1}`);
            $scope.temp = false;
            break;
          } else if ($scope.details[i].percentage.length > 3) {
            console.log("invalid % ", $scope.details[i].percentage.value);
            $scope.pop(`valid percentage in row ${i + 1}`);
          }
        }
        if ($scope.temp == false) {
          return;
        } else {
          $scope.details.push({
            degree: "",
            institute: "",
            startDate: "",
            endDate: "",
            percentage: "",
            popupOpened: {
              popup2: false,
              popup3: false,
            },
          });
        }
      };
  
      $scope.deleteRow = function ($index) {
        $scope.details.splice($index, 1);
      };
  
      // ui multiselect
      $scope.availableLanguages = [
        "English",
        "Hindi",
        "Punjabi",
        "Telugu",
        "Marathi",
        "French",
        "Spanish",
        "Russian",
        "Bengali",
        "Tamil",
        "Urdu",
        "Oriya",
      ];
      $scope.multipleDemo = {};
      $scope.multipleDemo.languages = ["English"];
  
      //Modal close
      $scope.closeModal = function () {
        console.log("close");
        $uibModalInstance.close();
        if (users != undefined) {
          console.log("scope name", $scope.ngName);
          users.editName = "";
          users.editEmail = "";
          users.editPhone = "";
          users.editDob = "";
          users.editGender = "";
          users.editAddress = "";
          users.editLanguage = "";
          users.editDetails = [];
          $scope.ngName = "";
          $scope.ngEmail = "";
          $scope.ngPhone = "";
          $scope.dt = "";
          $scope.gender = "";
          $scope.address = "";
          $scope.languages = "";
          $scope.details = [];
        }
      };
  
      $scope.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
          return true;
        }
        return false;
      };
  
      $scope.phoneNumber = function (inputtxt) {
        var phoneno = /^\d{10}$/;
        if (phoneno.test(inputtxt)) {
          return true;
        } else {
          return false;
        }
      };
  
      //slider start
  
      if (users == undefined) {
        $scope.slider1 = {
          value: 0,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
        $scope.slider2 = {
          value: 0,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
        $scope.slider3 = {
          value: 0,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
      } else {
        $scope.slider1 = {
          value: $scope.slider1,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
        $scope.slider2 = {
          value: $scope.slider2,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
        $scope.slider3 = {
          value: $scope.slider3,
          options: {
            floor: 0,
            ceil: 10,
            step: 1,
            showSelectionBar: true,
          },
        };
      }
      $scope.flag1 = false;
      $scope.flag2 = false;
      $scope.flag3 = false;
  
      $scope.clickDeveloping = function () {
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag1 = true;
        $scope.refreshSlider();
        console.log("slider value", $scope.slider1.value);
      };
  
      $scope.clickDesigning = function () {
        $scope.flag2 = true;
        $scope.flag3 = false;
        $scope.flag1 = false;
        $scope.refreshSlider();
      };
  
      $scope.clickTesting = function () {
        $scope.flag2 = false;
        $scope.flag3 = true;
        $scope.flag1 = false;
        $scope.refreshSlider();
      };
  
      //slider end
  
      $scope.ok = function () {
        $scope.obj = {
          name: $scope.ngName,
          email: $scope.ngEmail,
          phone: $scope.ngPhone,
          dob: $scope.dt,
          address: $scope.ngAddress,
          languages: $scope.ngLanguages,
          gender: $scope.gender,
          details: $scope.details,
          slider1: $scope.slider1.value,
          slider2: $scope.slider2.value,
          slider3: $scope.slider3.value,
        };
  
        var emailVal = $scope.ValidateEmail($scope.ngEmail);
  
        var validPhone = $scope.phoneNumber($scope.ngPhone);
  
        if ($scope.ngName == undefined || $scope.ngName == "") {
          $scope.pop("name");
        } else if ($scope.ngEmail == undefined || $scope.ngEmail == "") {
          console.log("inner email1 = ", $scope.ngEmail);
          $scope.pop("email");
        } else if (!emailVal) {
          $scope.pop("valid email id");
        } else if ($scope.ngPhone == undefined || $scope.ngPhone == "") {
          $scope.pop("phone no.");
        } else if (!validPhone) {
          $scope.pop("Valid phone no.");
        } else if ($scope.dt == undefined || $scope.dt == "") {
          console.log("date func");
          $scope.pop("DOB");
        } else if ($scope.gender == undefined || $scope.gender == "") {
          $scope.pop("gender");
        } else {
          delete $scope.obj.dob;
          $scope.obj.dob = $scope.dt.toLocaleDateString();
  
          $uibModalInstance.close($scope.obj);
        }
      };
    }
  );
  



