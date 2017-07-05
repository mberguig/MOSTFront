(function(){

var app = angular.module('myApp', ['services', 'ngResource']);

app.controller('mainCtrl', ['$scope', '$resource', 'GetData', function($scope, $resource, GetData){
$scope.date = new Date();

//--------------------------------------------
//Initialize and load batchs data
//--------------------------------------------
$scope.init = function(){
  $scope.batchs = {};
  $scope.batchSelected = {};
  $scope.stepVisible = false;
  $scope.UTVisible = false;
  $scope.batchsLoaded = false;
  getBatchs();
}

//--------------------------------------------
//Load batchs data
//--------------------------------------------
var getBatchs = function(){
  var formatedDate = $scope.date.toISOString().substring(0,10);
  GetData.getBatchs(formatedDate).then(function(response){
    console.log(response);
    $scope.batchs = response;
    $scope.batchsLoaded = true;
  });
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
  }else {
    if(($scope.batchSelected == null)||($scope.batchSelected.unitId != batch.unitId)){
      $scope.batchSelected = batch;
    //  selectDetailsToShow(batchId);
      // TODO : REQUETE AVEC BATCHID
    }else {
      $scope.UTVisible = false;
    }
  }
}

//--------------------------------------------
//Get steps for the Unit clicked
//--------------------------------------------
$scope.getSteps = function(unitId){
  console.log("unitId : ", unitId);
if($scope.batchs[$scope.batchSelected.id].treatmentUnits[unitId].steps[0] == null){
    GetData.getSteps(unitId).then(function(response){
      $scope.batchs[$scope.batchSelected.id].treatmentUnits[unitId].steps = response;
      $scope.batchs[$scope.batchSelected.id].treatmentUnits[unitId].steps.loaded = true;
      $scope.batchSelected = $scope.batchs[$scope.batchSelected.id];
    });
  }
}

//--------------------------------------------
//Filter functionning
//--------------------------------------------
$scope.addFilter = function(fitler){
  switch (filter) {
    case OK:
    //  $scope.filters.push("OK");
    break;
    case KOF:

    break;
    case KOT:

    break;
    case ALL:

    break;
    default:

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
