/**
 * Created by wang on 2015/10/23.
 */

angular.module('starter').factory('baseConfig',['$http','$q',function($http,$q) {
  var baseConfig = {
    Fund: {
      getUrl: "http://ewealth.abchina.com/app/data/api/DataService/FundFilterV2"
    },
    Finance: {
      getUrl: "http://ewealth.abchina.com/app/data/api/DataService/BoeProductV2"
    },
    Common: {
      apiCommon: function (url, data, method) {
        var baseUrl = "";
        var defer = $q.defer();
        var option = {
          method: method ? method : 'get',
          url: baseUrl + url,
          headers: {}
        };
        if (data && method === 'post') {
          option['data'] = data;
        }
        else if(data && (method==="get" || method==undefined)){
          option["params"]=data;
        }
        $http(option)
          .success(function (data) {
            defer.resolve(data);
          })
          .error(function (err) {
            defer.reject(err);
          });
        return defer.promise;
      }
    }
  };
  return baseConfig;
}]);
