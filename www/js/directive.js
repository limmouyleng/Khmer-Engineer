var module = angular.module('xpergineer.directives', []);
module.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    console.log('value : ', value)
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                console.log('hideTabs : ')
                $rootScope.hideTabs = false;
            });
        }
    };
});