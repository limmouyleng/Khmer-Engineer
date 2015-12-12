angular.module('xpergineer', ['ionic', 'ionic-material', 'xpergineer.controllers', 'xpergineer.services'])

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
      server: 'http://192.168.1.127:3000/',
      url: 'http://192.168.1.127:3000/api/'
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
                templateUrl: 'templates/article-detail.html',
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
                templateUrl: 'templates/article-detail.html',
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
