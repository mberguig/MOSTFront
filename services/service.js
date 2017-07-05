var services = angular.module('services', ['ngResource']);

services.factory('GetData', function($resource){

  var Batchs = $resource('http://localhost:8080/most/api/batchs/:date', {});
  var Steps = $resource('http://localhost:8080/most/api/steps/:unitId', {});
  return {
    getBatchs : function(formatedDate){
                  var query = Batchs.get({date:formatedDate}).$promise.then(function(response){
                              return response;
                          });
                return query;
              },

    getSteps : function(unitId){
                  var query = Steps.get({unitId:unitId}).$promise.then(function(response){
                                return response;
                            });
                  return query;
                }
  };
});
