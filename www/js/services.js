angular.module('xpergineer.services', [])

.factory('Articles', function($http, ApiEndpoint){
  var articles = []
  return{
    getArticles: function(){
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

.factory('Sections', function() {
  var sections = [{
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return sections;
    },
    remove: function(section) {
      sections.splice(sections.indexOf(section), 1);
    },
    get: function(sectionId) {
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === parseInt(sectionId)) {
          return sections[i];
        }
      }
      return null;
    }
  };
});