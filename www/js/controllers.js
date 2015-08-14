angular.module('xpergineer.controllers', [])

    .controller('HomeCtrl', function ($scope, $http) {
      $http.get('http://localhost:3001/api/articles').then(function(articles) {
        console.log('Success', articles.data);
        $scope.items = articles.data
      }, function(err) {
        console.error('ERR', err);      })
      
      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;
    })

    .controller('SectionsCtrl', function ($scope, Chats) {
      $scope.chats = Chats.all();
      $scope.remove = function (chat) {
        Chats.remove(chat);
      };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FavoritesCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });







