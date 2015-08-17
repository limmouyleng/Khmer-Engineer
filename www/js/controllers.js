angular.module('xpergineer.controllers', [])

    .controller('HomeCtrl', function ($scope, $http) {
      $http.get('http://192.168.1.124:3001/api/articles').then(function(articles) {
        $scope.items = articles.data
      }, function(err) {
        console.error('ERR', err);     
      })
      
      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;
    })

    .controller('SectionsCtrl', function ($scope) {
      $scope.sections = [
        {name: "Plumbing", id: 1},
        {name: "Fire Protection", id: 2},
        {name: "Electrical" , id: 3},
        {name: "Architecture" , id: 4},
        {name: "Civil Engineer" , id: 5},
        {name: "Mechanical" , id: 6},
      ]
    })

    .controller('SectionNewsCtrl', function ($scope, $stateParams, Sections) {
      $scope.section = Sections.get($stateParams.sectionId);
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FavoritesCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });







