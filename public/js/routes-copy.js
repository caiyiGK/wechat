// 声明模块，wechat.routes, 在app.js 引入此模块
angular.module('wechat.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        // 默认状态是tab.message

        $stateProvider
        // tab状态激活, 加载tabs.html模板, abstract: true, 表示tab只有在子状态显示的时候, 它才显示, 它本身是无法主动被激活的
            .state("tab", {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            // 注意views中的tab-message名字, 需要跟tabs.html中的ion-nav-view中的name一致
            .state("tab.message", {
                url: "/message",
                views: {
                    "tab-message": {
                        templateUrl: "templates/tab-message.html",
                        controller: "messageCtrl"
                    }
                }
            })
            .state('messageDetail', {
                url: '/messageDetail/:messageId',
                templateUrl: "templates/message-detail.html",
                controller: "messageDetailCtrl"
            })
            .state("tab.friends", {
                url: "/friends",
                views: {
                    "tab-friends": {
                        templateUrl: "templates/tab-friends.html"
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/message');
    });