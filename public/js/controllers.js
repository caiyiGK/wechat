angular.module('wechat.controllers', [])
    .run(function($rootScope) {
        $rootScope.common = {
            title: '微信',
            left: {
                icon: '',
                txt: '',
                link: ''
            },
            right: {
                icon: '',
                txt: '',
                link: ''
            },
            showTabs : true
        };
    })
    .controller('MainCtrl', function ($scope, $state, $stateParams) {
        
    })
    // 聊天列表
    .controller('chatListController', ['$scope', function ($scope, $ionicPopup, $ionicListDelegate) {
        $scope.chatList = chatList;
        $scope.common.showTabs = true;
        // 删除对话
        $scope.deleMsg = function (index) {
            $scope.chatList.splice(index, 1);
        };

        // 标志已读/未读
        $scope.setHints = function (chat) {
            if (chat.showHints) {
                chat.showHints = false;
                chat.noReadMessages = 1;
            } else {
                chat.showHints = true;
                chat.noReadMessages = 1;
            }
            $ionicListDelegate.closeOptionButtons();
        };


        $scope.common.title = '微信';
        $scope.common.left = {};
        $scope.common.right = {icon: 'ion-android-add'};
    }])
    // 聊天详情
    .controller('chatDetailController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        // 头部链接
        $scope.common.title = '微信';
        $scope.common.left = {txt: '微信', icon: 'ion-ios-arrow-left', click: function() {
            history.go(-1);
        }};
        $scope.common.right = {icon: 'ion-person', link: ""};
        $scope.common.showTabs = false;
        $scope.common.showChatDel = false;

        $scope.messages = messages[$routeParams.chatId];
        // console.log($stateParams.messageId);
        $scope.alertt=function(){
            alert('on-hold')
        }
    }])
     // 通讯录
    .controller('chatContactController', ['$scope', function($scope) {
        $scope.common.title = '通讯录';
        $scope.common.right = {icon: 'ion-person-add'};
    }])
    // 发现
    .controller('chatFindController', ['$scope', function($scope) {
        $scope.common.title = '发现';
    }])
    // 我
    .controller('chatUserController', ['$scope', function($scope) {
        $scope.common.title = '我';
    }])

