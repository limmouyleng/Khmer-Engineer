angular.module('xpergineer.controllers', [])
    .controller('HomeCtrl', function ($scope, $stateParams, Articles, ApiEndpoint) {
      Articles.all().then(function(articles){
        $scope.server = ApiEndpoint.server
        $scope.articles = articles
      });

      $scope.refreshNews = function(){
        Articles.all()
        .then(function(articles){
          $scope.server = ApiEndpoint.server
          $scope.articles = articles
        })
        .finally(function(){
          $scope.$broadcast('scroll.refreshComplete')
        })
      }
      
    })

    .controller('ArticleShowCtrl', function ($scope, $stateParams, Articles, ApiEndpoint) {
      Articles.get($stateParams.articleId).then(function(article){
        $scope.server = ApiEndpoint.server
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
        {name: "Computer Science" , id: 7}
      ]
    })

    .controller('SectionArticlesCtrl', function ($scope, $stateParams, Sections, ApiEndpoint) {
      Sections.get($stateParams.sectionId).then(function(articles){
        $scope.server = ApiEndpoint.server
        $scope.articles = articles
      })
    })

    .controller('SectionArticleShowCtrl', function ($scope, $stateParams, Articles, ApiEndpoint) {
      Articles.get($stateParams.articleId).then(function(article){
        $scope.server = ApiEndpoint.server
        $scope.article = article
      })
    })

    .controller('FavoritesCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });