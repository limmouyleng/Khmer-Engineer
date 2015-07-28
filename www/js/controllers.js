angular.module('xpergineer.controllers', [])

    .controller('HomeCtrl', function ($scope) {
      $scope.items = [
        {title: "Item 1",
          img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
          description: "Description 1"
        },
        {title: "Item 2",
          img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
          description: "Description 2"
        },
        {title: "Item 3",
          img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
          description: "Description 3"
        },
        {title: "Item 4",
          img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
          description: "Description 4"
        },
        {title: "Item 5",
          img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
          description: "Description 5"
        }
      ];
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







