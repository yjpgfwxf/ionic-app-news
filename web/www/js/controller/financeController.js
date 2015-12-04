/**
 * Created by wang on 2015/10/23.
 */

angular.module('starter').controller("FinanceController",['$scope', '$location', 'financeService',function($scope, $location, financeService) {
  $scope.financeList = [];

  var search = {
    //页码
    i: 1,
    //每页条数
    s: 10
  };

  $scope.isMoreData = true;

  //初始化数据
  function init() {
    financeService.getData(getParameters()).then(function (result) {
      if (result.ErrorCode == "0") {
        $scope.financeList = result.Data.Table;
        financeService.financeList = $scope.financeList;
      }
    });
  }

  //获取查询参数
  function getParameters() {
    return search;
  }

  //加载更多
  $scope.loadMore = function () {
    search.i++;
    financeService.getData(getParameters()).then(function (result) {
      if (result.ErrorCode == "0") {
        $scope.$broadcast('scroll.infiniteScrollComplete');
        if (result.Data.Table != undefined && result.Data.Table.length > 0) {
          $scope.financeList.push.apply($scope.financeList, result.Data.Table);
          financeService.financeList = $scope.financeList;
        }
        else {
          $scope.isMoreData = false;
        }
      }
    });
  }

  $scope.onDragRight = function () {
    console.log("onDragRight");
  };

  $scope.onDragLeft = function () {
    console.log("onDragLeft");
  }

  //上拉刷新数据
  $scope.refreshData = function () {
    $scope.$broadcast('scroll.refreshComplete');
    financeService.financeList = $scope.financeList;
  }

  init();
}]);


angular.module('starter').controller("FinanceDetailController",['$scope', '$location', 'financeService','$stateParams',function($scope, $location, financeService,$stateParams) {
  $scope.finance=financeService.getFinanceById($stateParams.financeId);
}]);

