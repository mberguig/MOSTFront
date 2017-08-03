(function(){

var app = angular.module('myApp', ['services', 'ngResource']);

app.controller('mainCtrl', ['$scope', '$resource', 'GetData', function($scope, $resource, GetData){
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
  $scope.nbTotalBatchs = {
    ALL: "...",
    OK: "...",
    KOF:"...",
    KOT:"...",
    EC:"..."
  };
  var formatedDate = $scope.date.toISOString().substring(0,10);
  GetData.getNbResultsEC(formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.EC = response.result;
    console.log("EC : ", response);
  });
  GetData.getNbResultsOK("OK", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.OK = response.result;
    console.log("OK : ", response);
  });
  GetData.getNbResultsKOF("KOF", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.KOF = response.result;
    console.log("KOF : ", response);
  });
  GetData.getNbResultsKOT("KOT", formatedDate, $scope.isCTI).then(function(response){
    $scope.nbTotalBatchs.KOT = response.result;
    console.log("KOT : ", response);
  });
  $(".btnStatus").removeClass("selected");
  $("#btnAll").addClass("selected");
  getBatchs(formatedDate);
}

//--------------------------------------------
//Load batchs data
//--------------------------------------------
var getBatchs = function(formatedDate){
  GetData.getBatchs(formatedDate, $scope.page, $scope.isCTI).then(function(response){
    console.log(response);
    $scope.batchs = response;
      console.log($scope.batchs);
    $scope.batchsLoaded = true;
  });
    var formatedDate = $scope.date.toISOString().substring(0,10);
  GetData.getNbResults(formatedDate, $scope.isCTI).then(function(response){
    console.log(response);
    $scope.nbTotalBatchs.ALL = response.result;
    $scope.nbTotalPages = Math.ceil($scope.nbTotalBatchs.ALL /10);
    console.log("  $scope.nbTotalPages : ",   $scope.nbTotalPages);
  });

}

//----------PAGINATION ----------- //
$scope.getMoreBatchs = function(){
  console.log("isCTI : ", $scope.isCTI);
  if($scope.batchsHistorical[$scope.page] == undefined){
      $scope.batchsHistorical[$scope.page]=$scope.batchs;
  }
  $scope.page +=1;
  if($scope.batchsHistorical[$scope.page] == undefined) { //si l'historique n'existe pas pour la page demandée
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
    $scope.batchs = $scope.batchsHistorical[$scope.page];
  }
}

$scope.getLessBatchs = function(){
  if($scope.batchsHistorical[$scope.page] == undefined){
    $scope.batchsHistorical[$scope.page]=$scope.batchs;
  }
  $scope.page -=1;
  $scope.batchs = $scope.batchsHistorical[$scope.page];
}

//--------------------------------------------
//To display the UnitTreatment screen
//--------------------------------------------
$scope.batchClicked = function(batch){
  if($scope.stepVisible == true)
    {console.log('true');
    $scope.stepVisible = !$scope.stepVisible;}

  if($scope.UTVisible == false){
    $scope.UTVisible = true;
    $scope.batchSelected = batch;
  //  selectDetailsToShow(batchId);
    // TODO : REQUETE AVEC BATCHID
    $scope.getUnits(batch.treatmentId);
  }else {
    if(($scope.batchSelected == null)||($scope.batchSelected.unitId != batch.unitId)){
      $scope.batchSelected = batch;
    //  selectDetailsToShow(batchId);
      // TODO : REQUETE AVEC BATCHID
      $scope.getUnits(batch.treatmentId);
    }else {
      $scope.UTVisible = false;
    }
  }
}

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
