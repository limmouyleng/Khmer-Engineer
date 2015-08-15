angular.module('xpergineer.controllers', [])

    .controller('HomeCtrl', function ($scope, $http) {
      $http.get('http://192.168.1.4:3000/api/articles').then(function(articles) {
        $scope.items = articles.data
      }, function(err) {
        console.error('ERR', err);     
      })
      
      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;
    })

    .controller('SectionsCtrl', function ($scope, $http) {
      $scope.sections = [
        {name: "Plumbing"},
        {name: "Fire Protection"},
        {name: "Electrical"},
        {name: "Architecture"},
        {name: "Civil Engineer"},
        {name: "Mechanical"},
      ]
      
      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FavoritesCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });







