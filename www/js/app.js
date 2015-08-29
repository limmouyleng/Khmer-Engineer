angular.module('xpergineer', ['ionic', 'xpergineer.controllers', 'xpergineer.services'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleLightContent();
        }
      });
    })

    .constant('ApiEndpoint', {
      url: 'http://192.168.1.124:3000/api/'
    })

    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: 'templates/tabs.html'
          })

          .state('tab.home', {
            url: '/home',
            views: {
              'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
              }
            }
          })

          .state('tab.article_show', {
            url: '/home/:articleId',
            views: {
              'tab-home': {
                templateUrl: 'templates/articles/show.html',
                controller: 'ArticleShowCtrl'
              }
            }
          })

          .state('tab.sections', {
            url: '/sections',
            views: {
              'tab-sections': {
                templateUrl: 'templates/tab-sections.html',
                controller: 'SectionsCtrl'
              }
            }
          })

          .state('tab.section_articles', {
            url: '/sections/:sectionId',
            views: {
              'tab-sections': {
                templateUrl: 'templates/sections/articles.html',
                controller: 'SectionArticlesCtrl'
              }
            }
          })

          .state('tab.section_article_show', {
            url: '/sections/:sectionId/:articleId',
            views: {
              'tab-sections': {
                templateUrl: 'templates/sections/show.html',
                controller: 'SectionArticleShowCtrl'
              }
            }
          })

          .state('tab.favorites', {
            url: '/favorites',
            views: {
              'tab-favorites': {
                templateUrl: 'templates/tab-favorites.html',
                controller: 'FavoritesCtrl'
              }
            }
          });

      $urlRouterProvider.otherwise('/tab/home');
    });
