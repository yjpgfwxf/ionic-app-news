/**
 * Created by wang on 2015/10/23.
 */

angular.module('starter').factory('financeService',['$http','$q','baseConfig',function($http,$q,baseConfig) {

  var factory={};

  factory.financeList=[];

  factory.getData=function(paramers) {
    return baseConfig.Common.apiCommon(baseConfig.Finance.getUrl,paramers);
  };

  factory.getFinanceById=function(id){
    var length=factory.financeList.length;
    for(var i=0;i<length;i++){
      var item=factory.financeList[i];
      if(id==item.ProductNo){
        return item;
      }
    }
  }



  return factory;
}]);


