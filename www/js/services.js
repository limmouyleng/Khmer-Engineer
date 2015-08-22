angular.module('xpergineer.services', [])

.factory('Articles', function($http, ApiEndpoint){
  var articles = []
  return{
    all: function(){
      return $http.get(ApiEndpoint.url + 'articles').then(function(articles) {
        articles = articles.data
        return articles
      });
    },
    get: function(articleId){
      return $http.get(ApiEndpoint.url + 'articles/' + articleId).then(function(article) {
        return article.data
      });
    }
  }
})

.factory('Sections', function($http, ApiEndpoint) {
  var sections = [];
  return{
    get: function(sectionId){
      return $http.get(ApiEndpoint.url + 'sections/' + sectionId).then(function(articles){
        return articles.data
      });
    }
  }
});