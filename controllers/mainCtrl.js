(function(){

var app = angular.module('myApp', ['services', 'ngResource']);

app.controller('mainCtrl', ['$scope', '$resource', 'GetData', 'GetNbResults', function($scope, $resource, GetData, GetNbResults){
$scope.date = new Date();
$scope.isCTI = false;
//--------------------------------------------
//Initialize and load batchs data
//--------------------------------------------
$scope.init = function(){
  $scope.batchs = {};
  $scope.batchsHistorical = [];
  $scope.batchSelected = {};
  $scope.stepVisible = false;
  $scope.UTVisible = false;
  $scope.batchsLoaded = false;
  $scope.page = 0;
  $scope.nbTotalPages = 1;
  $scope.status = "ALL";
  $scope.error = {};
  $scope.nbTotalBatchs = {
    ALL: "...",
    OK: "...",
    KOF:"...",
    KOT:"...",
    EC:"..."
  };
  var formatedDate = $scope.date.toISOString().substring(0,10);
  getNbBatchs(formatedDate);
  $(".btnStatus").removeClass("selected");
  $("#btnAll").addClass("selected");
  getBatchs(formatedDate);
}

//--------------------------------------------
//Load nb of total batchs
//--------------------------------------------
var getNbBatchs = function(formatedDate) {
  GetNbResults.getNbResultsEC(formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.EC = response.result;
  }, function error(error){
      $scope.nbTotalBatchs.EC = "NA";
      console.error("get nb total batchs EC failed, error : " + errorHandler(error.status).message + " with status " + error.status);
  });
  GetNbResults.getNbResultsOK("OK", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.OK = response.result;
  }, function error(error){
      $scope.nbTotalBatchs.OK = "NA";
      console.error("get nb total batchs OK failed, error : " + errorHandler(error.status).message + " with status " + error.status);
  });
  GetNbResults.getNbResultsKOF("KOF", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.KOF = response.result;
  }, function error(error){
      $scope.nbTotalBatchs.KOF = "NA";
      console.error("get nb total batchs KOF failed, error : " + errorHandler(error.status).message + " with status " + error.status);
  });
  GetNbResults.getNbResultsKOT("KOT", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.KOT = response.result;
  }, function error(error){
      $scope.nbTotalBatchs.KOT = "NA";
      console.error("get nb total batchs KOT failed, error : " + errorHandler(error.status).message + " with status " + error.status);
  });
}


//--------------------------------------------
//Load batchs data
//--------------------------------------------
var getBatchs = function(formatedDate){
  GetData.getBatchs(formatedDate, $scope.page, $scope.isCTI).then(
    function success(response){
      $scope.batchs = response;
      $scope.batchsLoaded = true;
    }, function error(error){
      $scope.error = errorHandler(error.status);
      $scope.batchsLoaded = true;
    });
    var formatedDate = $scope.date.toISOString().substring(0,10);
  GetNbResults.getNbResults(formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.ALL = response.result;
    $scope.nbTotalPages = Math.ceil($scope.nbTotalBatchs.ALL /10);
  }, function error(error){
    $scope.nbTotalBatchs.ALL = "NA";
    $scope.nbTotalPages = "1";
      console.error("get nb total batchs failed, error : " + errorHandler(error.status).message + " with status " + error.status);
  });

}

//--------------------------------------------
//Pagning functions
//--------------------------------------------
$scope.getMoreBatchs = function(){ //to the next page
  if($scope.batchsHistorical[$scope.page] == undefined){ //if the actual page isn't in memory, save it
      $scope.batchsHistorical[$scope.page]=$scope.batchs;
  }
  $scope.page +=1;
  if($scope.batchsHistorical[$scope.page] == undefined) { //if the historical of the page asked isn't in memory, get the page
    var formatedDate = $scope.date.toISOString().substring(0,10);
    switch($scope.status){
      case "ALL":
        GetData.getBatchs(formatedDate, $scope.page, $scope.isCTI).then(function(response){
          console.log(response);
          $scope.batchs = response;
          $scope.batchsLoaded = true;
        });
      break;
      case "OK":
        GetData.getBatchsOK(formatedDate, $scope.page, $scope.isCTI).then(function(response){
          console.log(response);
          $scope.batchs = response;
          $scope.batchsLoaded = true;
        });
      break;
      case "KOF":
        GetData.getBatchsKOF(formatedDate, $scope.page, $scope.isCTI).then(function(response){
          console.log(response);
          $scope.batchs = response;
          $scope.batchsLoaded = true;
        });
      break;
      case "KOT":
        GetData.getBatchsKOT(formatedDate, $scope.page, $scope.isCTI).then(function(response){
          console.log(response);
          $scope.batchs = response;
          $scope.batchsLoaded = true;
        });
      break;
    }

  }else {
    $scope.batchs = $scope.batchsHistorical[$scope.page]; // if the historical is in memory, just get it from the memory
  }
}
//get the previous page
$scope.getLessBatchs = function(){
  if($scope.batchsHistorical[$scope.page] == undefined){ //if the actual page isn't in memory, save it
    $scope.batchsHistorical[$scope.page]=$scope.batchs;
  }
  $scope.page -=1;
  $scope.batchs = $scope.batchsHistorical[$scope.page]; //get the page in memory
}

//--------------------------------------------
//To display the UnitTreatment screen
//--------------------------------------------
$scope.batchClicked = function(batch){
  if($scope.stepVisible == true)
    $scope.stepVisible = !$scope.stepVisible;

  if($scope.UTVisible == false){
    $scope.UTVisible = true;
    $scope.batchSelected = batch;
    $scope.getUnits(batch.treatmentId);
  }else {
    if(($scope.batchSelected == null)||($scope.batchSelected.unitId != batch.unitId)){
      $scope.batchSelected = batch;
      $scope.getUnits(batch.treatmentId);
    }else {
      $scope.UTVisible = false;
    }
  }
}

//--------------------------------------------
//To update the results in function of the status of CTI
//--------------------------------------------
$scope.CTIClicked = function(){
  $scope.CTI = !$scope.CTI;
  if($scope.status =="ALL") {
      $scope.init();
    }else {
    $scope.getBatchByStatus($scope.status, "DIFFSTATUS");
    }

  }


//--------------------------------------------
//Get steps for the Unit clicked
//--------------------------------------------
$scope.getSteps = function(unitId){
  console.log("unitId : ", unitId);
  console.log("$scope.batchs : ", $scope.batchs);
  console.log("$scope.batchSelected : ", $scope.batchSelected);
if($scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits[unitId].steps[0] == null){
    GetData.getSteps(unitId).then(function(response){
      $scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits[unitId].steps = response;
      $scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits[unitId].steps.loaded = true;
      $scope.batchSelected = $scope.batchs[$scope.batchSelected.treatmentId];
      console.log("steps : ", response);
    });
  }
}

//--------------------------------------------
//Get units for the Unit clicked
//--------------------------------------------
$scope.getUnits = function(batchId){

if($scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits[0] == null){
    GetData.getUnits(batchId).then(function(response){
      $scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits = response;
      $scope.batchs[$scope.batchSelected.treatmentId].treatmentUnits.loaded = true;
      $scope.batchSelected = $scope.batchs[$scope.batchSelected.treatmentId];
      console.log("units : ", response);
    });
  }
}




//--------------------------------------------
//Filter functionning
//--------------------------------------------
$scope.getBatchByStatus = function(status, page){
  if(status != $scope.status){
    $scope.batchs = {};
    $scope.batchsHistorical = [];
    $scope.batchSelected = {};
    $scope.stepVisible = false;
    $scope.UTVisible = false;
    $scope.batchsLoaded = false;
    $scope.page = page;
    $(".btnStatus").removeClass("selected");
    console.log("filter : ", status);
    var formatedDate = $scope.date.toISOString().substring(0,10);
    switch (status) {
      case "OK":
          GetData.getBatchsOK(formatedDate, $scope.page, $scope.isCTI).then(function(response){
            console.log(response);
            $scope.batchs = response;
            $scope.batchsLoaded = true;
          });
          $("#btnOK").addClass("selected");
      break;
      case "KOF":
          GetData.getBatchsKOF(formatedDate, $scope.page, $scope.isCTI).then(function(response){
            console.log(response);
            $scope.batchs = response;
            $scope.batchsLoaded = true;
          });
          $("#btnKOF").addClass("selected");
      break;
      case "KOT":
        GetData.getBatchsKOT(formatedDate, $scope.page, $scope.isCTI).then(function(response){
          console.log(response);
          $scope.batchs = response;
          $scope.batchsLoaded = true;
        });
        $("#btnKOT").addClass("selected");
      break;
      case "EC":

      break;
      default:

      }
      $scope.status = status;
  }
}


//--------------------------------------------
//To personalize some messages regarding to the error status
//--------------------------------------------
var errorHandler = function(status, message){
  console.log("status : ", status);
  if (status == -1){
    return {status : -1, message : "Réponse vide : le serveur ne semble pas être démarré.", isError: "true"};
  } else {
    return {status : status, message : message, isError: "true"};
  }
}

  }]);


// ---- DIRECTIVES ---- //
  app.directive('toggleClass', function(){
  return {
         restrict: 'A',
         link: function(scope, element, attrs) {
             element.bind('click', function() {
                 element.toggleClass(attrs.toggleClass);
             });
         }
     };
});


})();
