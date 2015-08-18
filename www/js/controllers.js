angular.module('xpergineer.controllers', [])

    .controller('HomeCtrl', function ($scope, $stateParams, Articles) {
      Articles.getArticles().then(function(articles){
        $scope.articles = articles
      });
      
      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;
    })

    .controller('NewsCtrl', function ($scope, $stateParams, Articles) {
      Articles.get($stateParams.articleId).then(function(article){
        $scope.article = article
      })
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

    .controller('FavoritesCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });