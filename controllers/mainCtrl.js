(function(){

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){

$scope.batchs = batchs;
$scope.UTs = UTs;
$scope.date = new Date(2017,04,09,10,0,0,0);
$scope.stepVisible = false;
$scope.UTVisible = false;
$scope.batchSelected = null;
$scope.is10or9May = "09May";


//--------------------------------------------
//To display the UnitTreatment screen
//--------------------------------------------
$scope.batchClicked = function(batchId){
  if($scope.stepVisible == true)
    {console.log('true');
    $scope.stepVisible = !$scope.stepVisible;}

  if($scope.UTVisible == false){
    $scope.UTVisible = true;
    $scope.batchSelected = batchId;
    selectDetailsToShow(batchId);
    // TODO : REQUETE AVEC BATCHID
  }else {
    if($scope.batchSelected != batchId){
      $scope.batchSelected = batchId;
      selectDetailsToShow(batchId);
      // TODO : REQUETE AVEC BATCHID
    }else {
      $scope.UTVisible = false;
    }
  }
}

var selectDetailsToShow = function(batchId){
  switch (batchId) {
    case "CRMSFOL":
      if($scope.is10or9May == "09May")
        $scope.UTs = UTs;
      else {
        $scope.UTs = UTsBis;
      }
      break;
    case "CRMCNIL":
      $scope.UTs = UTsBis3;
      break;
    case "CRMCDFNDRE":
      $scope.UTs = UTsBis2;
      break;
  }
}

//--------------------------------------------
//On date Change, new Data
//--------------------------------------------
$scope.changeDate = function(){
  $scope.UTVisible = false;
  //TODO : new Request with the new Date
  if(Object.keys($scope.batchs).length > 2) {
    $scope.batchs=batchsBis;
    $scope.UTs = UTsBis;
    $scope.is10or9May = "10May";
  }else {
    $scope.batchs=batchs;
    $scope.UTs = UTs;
    $scope.is10or9May = "09May";
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


  });


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
