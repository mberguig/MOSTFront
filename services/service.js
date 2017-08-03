var services = angular.module('services', ['ngResource']);

services.factory('GetData', function($resource){

  var Batchs = $resource('http://localhost:8080/most/api/batchs2/:date/:page/:isCTI', {});
  var BatchsKOT = $resource('http://localhost:8080/most/api/batchsByStatus/KOT/:date/:page/:isCTI', {});
  var BatchsKOF = $resource('http://localhost:8080/most/api/batchsByStatus/KOF/:date/:page/:isCTI', {});
  var BatchsOK = $resource('http://localhost:8080/most/api/batchsByStatus/OK/:date/:page/:isCTI', {});
  var Units = $resource('http://localhost:8080/most/api/units/:batchId', {});
  var Steps = $resource('http://localhost:8080/most/api/steps/:unitId', {});
  var nbResults = $resource('http://localhost:8080/most/api/getTotalNumberOfBatchs/:date/:isCTI', {});
  var nbResultsOK = $resource('http://localhost:8080/most/api/getTotalNumberOfBatchsByStatus/:status/:date/:isCTI', {});
  var nbResultsKOF = $resource('http://localhost:8080/most/api/getTotalNumberOfBatchsByStatus/:status/:date/:isCTI', {});
  var nbResultsKOT = $resource('http://localhost:8080/most/api/getTotalNumberOfBatchsByStatus/:status/:date/:isCTI', {});
  var nbResultsEC = $resource('http://localhost:8080/most/api/getTotalNumberOfBatchsEC/:date/:isCTI', {});
  return {
    getBatchs : function(formatedDate, page, isCTI){
                    var query = Batchs.get({date:formatedDate, page:page, isCTI:isCTI}).$promise.then(function(response){
                    return response;
                    });
                    return query;
                  },
    getBatchsKOT : function(formatedDate, page, isCTI){
                  var query = BatchsKOT.get({date:formatedDate, page:page, isCTI:isCTI}).$promise.then(function(response){
                    return response;
                  });
                  return query;
                  },
    getBatchsKOF : function(formatedDate, page, isCTI){
                  var query = BatchsKOF.get({date:formatedDate, page:page, isCTI:isCTI}).$promise.then(function(response){
                    return response;
                  });
                  return query;
                  },
    getBatchsOK : function(formatedDate, page, isCTI){
                  var query = BatchsOK.get({date:formatedDate, page:page, isCTI:isCTI}).$promise.then(function(response){
                    return response;
                  });
                  return query;
                  },
    getUnits : function(batchId){
                  var query = Units.get({batchId:batchId}).$promise.then(function(response){
                    return response;
                  });
                  return query;
                  },
    getSteps : function(unitId){
                  var query = Steps.get({unitId:unitId}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                },
    getNbResults : function(formatedDate, isCTI){
                  var query = nbResults.get({date:formatedDate, isCTI:isCTI}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                },
    getNbResultsEC : function(formatedDate, isCTI){
                  var query = nbResultsEC.get({date:formatedDate, isCTI:isCTI}).$promise.then(function(response){
                                return response;
                            });
                    return query;
                },
    getNbResultsOK : function(status, formatedDate, isCTI){
                  var query = nbResultsOK.get({status:status,date:formatedDate, isCTI:isCTI}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                },
    getNbResultsKOF : function(status, formatedDate, isCTI){
                  var query = nbResultsKOF.get({status:status,date:formatedDate, isCTI:isCTI}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                },
    getNbResultsKOT : function(status, formatedDate, isCTI){
                  var query = nbResultsKOT.get({status:status,date:formatedDate, isCTI:isCTI}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                }
  };
});
