var myModule = angular.module("myModule", [
  "ui.bootstrap",
  "ngSanitize",
  "ui.select",
  "toaster",
  "rzSlider",
  "ngCsv",
  "chart.js",
]);
myModule.filter("startFrom", function () {
  return function (input, start) {
    if (input === undefined || input === null || input.length === 0) {
      return [];
    } else {
      start = +start; //parse to int
      return input.slice(start);
    }
  };
});

myModule.controller("myController", function ($scope, toaster, $uibModal) {
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

  var userlist = [
    {
      name: "Ben",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "5/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "1",
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      flag: true,
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sonam",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "6/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "2",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Jiya",
      email: "jiya@patientbond.com",
      phone: 9943278210,
      gender: "Female",
      dob: "9/2/1985",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "3",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Akash",
      email: "akas@patientbond.com",
      phone: 7231463210,
      gender: "Male",
      dob: "12/7/1982",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "4",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Jen",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "5/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "5",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Tiya",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "2/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "6",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Rohan",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "8/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "7",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Riya",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "7/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "8",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Neha",
      email: "jiya@patientbond.com",
      phone: 9943278210,
      gender: "Female",
      dob: "9/2/1985",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "9",

      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Akash",
      email: "akas@patientbond.com",
      phone: 7231463210,
      gender: "Male",
      dob: "12/7/1982",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "10",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Ritik",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "3/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "11",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sakshi",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "3/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "12",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sonam",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "2/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "13",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Ben",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "8/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "14",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sahil",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "4/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "15",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Jiya",
      email: "jiya@patientbond.com",
      phone: 9943278210,
      gender: "Female",
      dob: "4/2/1985",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "16",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Akash",
      email: "akas@patientbond.com",
      phone: 7231463210,
      gender: "Male",
      dob: "12/7/1982",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "17",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Ritik",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "7/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "18",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Rohit",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "2/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "19",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Neha",
      email: "jiya@patientbond.com",
      phone: 9943278210,
      gender: "Female",
      dob: "10/2/1985",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "20",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Akash",
      email: "akas@patientbond.com",
      phone: 7231463210,
      gender: "Male",
      dob: "11/7/1982",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "21",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Ritik",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "5/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "22",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sakshi",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "10/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "23",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Sonam",
      email: "sona@patientbond.com",
      phone: 8855343210,
      gender: "Female",
      dob: "11/25/1994",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "24",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
    {
      name: "Ben",
      email: "ben@patientbond.com",
      phone: 9876543210,
      gender: "Male",
      dob: "3/31/1990",
      editDelete: "",
      address: "House no. 432 Mohali",
      languages: ["english"],
      id: "25",
      flag: true,
      details: [
        {
          degree: "cse",
          institute: "cu",
          startDate: "12/7/2019",
          endDate: "11/13/2022",
          percentage: 78,
          popupOpened: { popup2: false, popup3: false },
        },
      ],
      slider1: "5",
      slider2: "7",
      slider3: "9",
    },
  ];
  var index = userlist.length;

  //------------export------------//

  $scope.exportData = function () {
    $scope.exportList = JSON.parse(JSON.stringify(userlist));

    $scope.exportList.forEach(function (user) {
      user.dob = $scope.getAge(user.dob);
    });

    $scope.exportList.forEach(function (user) {
      delete user.address,
        delete user.languages,
        delete user.details,
        delete user.slider1,
        delete user.slider2,
        delete user.slider3,
        delete user.id,
        delete user.flag,
        delete user.editDelete;
    });
    return $scope.exportList;
  };

  $scope.getHeader = function () {
    return ["Name", "Email", "Phone", "Gender", "Age"];
  };
  //----------export end----------//

  //-------canvas chartjs----------//

  $scope.updatedUserList = function () {
    var jan = 0;
    var feb = 0;
    var mar = 0;
    var april = 0;
    var may = 0;
    var june = 0;
    var july = 0;
    var aug = 0;
    var sept = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;

    for (var k = 0; k < userlist.length; k++) {
      var temp = userlist[k].dob.split("/")[0];
      if (temp == "01" || temp == "1") jan++;
      else if (temp == "02" || temp == "2") feb++;
      else if (temp == "03" || temp == "3") mar++;
      else if (temp == "04" || temp == "4") april++;
      else if (temp == "05" || temp == "5") may++;
      else if (temp == "06" || temp == "6") june++;
      else if (temp == "07" || temp == "7") july++;
      else if (temp == "08" || temp == "8") aug++;
      else if (temp == "09" || temp == "9") sept++;
      else if (temp == "10") oct++;
      else if (temp == "11") nov++;
      else if (temp == "12") dec++;
    }

    $scope.labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    $scope.data = [
      jan,
      feb,
      mar,
      april,
      may,
      june,
      july,
      aug,
      sept,
      oct,
      nov,
      dec,
    ];
    $scope.colors = [
      "#004b4a",
      "#FEBD01", "#FF8C00", "#FFCBA6",
      "#004b4a",
      "#FEBD01", "#FF8C00", "#FFCBA6",
      "#004b4a",
      "#FEBD01", "#FF8C00", "#FFCBA6",
    ];
    $scope.options = { legend: { display: true } };

  }

  $scope.updatedUserList();

  //canvas end//

  $scope.userlist = userlist;
  $scope.rowLimit = 6;

  // Pagination Start
  $scope.totalItems = `${userlist.length}`;
  $scope.currentPage = 1;

  $scope.searchLength = function (len) {
    $scope.currentPage = 1;
    if (len > $scope.rowLimit) {
      $scope.totalItems = len;
      $scope.pagination();
    }
    $scope.totalItems = len;
  };

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pagination = function () {
    // $scope.totalItems = $scope.userlist.length;
    $scope.itemsPerPage = $scope.rowLimit;
    $scope.begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
    $scope.end = $scope.begin + $scope.itemsPerPage;

    // Total Entries
    if ($scope.end > userlist.length) {
      $scope.end = userlist.length;
      $scope.totalEntries = `Showing ${$scope.begin + 1} to ${$scope.end} of ${
        userlist.length
      } entries.`;
    } else {
      $scope.totalEntries = `Showing ${$scope.begin + 1} to ${$scope.end} of ${
        userlist.length
      } entries.`;
    }
  };
  $scope.pagination();
  // Pagination End

  //calling
  $scope.callingMe = function (id) {
    $scope.openUserInfo(id);
  };

  //edit
  $scope.editFunc = function (id) {
    var i;
    for (var j = 0; j < userlist.length; j++) {
      if (userlist.find(() => id == userlist[j].id)) {
        $scope.obj1 = {
          editName: userlist[j].name,
          editEmail: userlist[j].email,
          editPhone: userlist[j].phone,
          editDob: userlist[j].dob,
          editGender: userlist[j].gender,
          editAddress: userlist[j].address,
          editLanguage: userlist[j].languages,
          editDetails: userlist[j].details,
          editSlider1: userlist[j].slider1,
          editSlider2: userlist[j].slider2,
          editSlider3: userlist[j].slider3,
        };
        i = j;
      }
    }
    $scope.open(i, id);
  };

  $scope.pop = function (text) {
    toaster.pop(
      "success",
      "Your data is " + text,
      "{template: 'addedData.html'}",
      2000,
      "templateWithData"
    );
  };

  $scope.removeRow = function (id) {
    // userlist.forEach((user, index) => {
    //   if (user.id == id) {
    //     userlist.splice(index, 1);
    //   }
    // });
    // flag = false;
    // $scope.totalItems = $scope.userlist.length;
    // $scope.pop("deleted");
    // $scope.pagination();

    $scope.openDeleteModal(id);
  };

  // Modal Start

  $scope.open = function (i, id) {
    var editModalInstance = $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "myModalContent.html",
      controller: "ModalInstanceCtrl",
      controllerAs: "$scope",
      size: "lg",
      backdrop: true,
      resolve: {
        users: function () {
          return $scope.obj1;
        },
      },
    });
    editModalInstance.result.then(
      function (obj) {
        if (obj != undefined && i == undefined) {
          $scope.userlist.unshift({
            name: obj.name,
            email: obj.email,
            phone: obj.phone,
            gender: obj.gender,
            dob: obj.dob,
            address: obj.address,
            languages: obj.languages,
            details: obj.details,
            slider1: obj.slider1,
            slider2: obj.slider2,
            slider3: obj.slider3,
            flag: true,
            editDelete: "",
            id: index + 1,
          });
          index++;
          $scope.updatedUserList(userlist);
          $scope.pop("successfully added");
        } else if (obj != undefined) {
          userlist[i] = obj;
          userlist[i].id = id;
          userlist[i].flag = true;

          userlist[i].editDelete = "";

          $scope.updatedUserList(userlist);

          $scope.obj1 = {
            editName: "",
            editEmail: "",
            editPhone: "",
            editDob: "",
            editGender: "",
            editAddress: "",
            editLanguage: "",
            editDetails: [
              {
                degree: "",
                institute: "",
                startDate: "",
                endDate: "",
                percentage: "",
              },
            ],
            editSlider1: "",
            editSlider2: "",
            editSlider3: "",
          };
          $scope.pop("successfully added");
        }
      },
      function fail(reason) {
        if (~reason.indexOf("backdrop")) {
          $scope.obj1 = {
            editName: "",
            editEmail: "",
            editPhone: "",
            editDob: "",
            editGender: "",
            editAddress: "",
            editLanguage: "",
            editDetails: [
              {
                degree: "",
                institute: "",
                startDate: "",
                endDate: "",
                percentage: "",
              },
            ],
            editSlider1: "",
            editSlider2: "",
            editSlider3: "",
          };
        }
      }
    );
  };

  //delete modal start
  $scope.openDeleteModal = function (i) {
    var deleteModalInstance = $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "deleteModalContent.html",
      controller: "deleteModalInstanceCtrl",
      controllerAs: "$scope",
      size: "md",
      backdrop: true,
      resolve: {
        deleteUser: function () {
          return $scope.userlist;
        },
        idx: function () {
          return i;
        },
      },
    });
    deleteModalInstance.result.then(
      function (len) {
        $scope.totalItems = len;
        $scope.pagination();
      },
      function () {}
    );
  };

  //user info modal start
  $scope.openUserInfo = function (id) {
    var carouselModalInstance = $uibModal.open({
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "carousel.html",
      controller: "carouselInstanceCtrl",
      controllerAs: "$scope",
      size: "md",
      backdrop: true,
      resolve: {
        userInfoList: function () {
          return $scope.userlist;
        },
        index: function () {
          return id;
        },
      },
    });
    carouselModalInstance.result.then(
      function () {},
      function () {}
    );
  };

  // Modal End
});