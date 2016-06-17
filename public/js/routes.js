// 声明模块，wechat.routes, 在app.js 引入此模块
angular.module('wechat.routes', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
         $routeProvider
            .when('/', {
                templateUrl: 'templates/chatList.html',
                controller : 'chatListController'
            })
            .when('/chatDetail/:chatId', {
                templateUrl : 'templates/chatDetail.html',
                controller : 'chatDetailController'
            })
            .when('/contact', {
                templateUrl : 'templates/chatContact.html',
            })
            .otherwise({
                redirectTo: 'templates/index.html'
            });
    }]);