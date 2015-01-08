
(function() {

    var CustomersController = function($scope) {

        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[
            {joined: '2002-12-02', name: 'Bobjohn', city: 'Drogheda', orderTotal: '84.361'},
            {joined: '2001-12-02', name: 'JohnBob', city: 'Dublin',  orderTotal: '100.65'},
            {joined: '2000-12-02', name: 'Steo', city: 'Cork',  orderTotal: '62.365'},
            {joined: '1999-12-02', name: 'Chris', city: 'Wexford',  orderTotal: '27.16'}];

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }

    }

    CustomersController.$inject = ['$scope']

    angular.module('customersApp').controller('CustomersController', CustomersController)

}());