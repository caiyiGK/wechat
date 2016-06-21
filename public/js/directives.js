// chatDetail 指令
angular.module('wechat.directives', []) 
.directive('chatDetail', ['$http', '$routeParams', '$timeout', function($http, $routeParams, $timeout) {
    return {
        restrict : "AECM",
        templateUrl : 'templates/tpldirectives/chat-item.html',
        repeat : true,
        controller : function($scope,Data) {
            $scope.data = Data
        },
        link : function(scope, element, attrs, Data) {

            // ajax 获取数据
            $http.get('/js/data/json/messagess.json').success(function(data){
                scope.messages       = data[$routeParams.chatId].data;
                scope.data.title     = data[$routeParams.chatId].friend;  
                scope.data.leftTxt   = '微信';
                scope.data.leftIcon  = 'ion-ios-arrow-left';
                scope.data.rightIcon = 'ion-person';
            }).error(function(err){
                console.log(err)
            });

            scope.showChatDel = false;  // true 筛选删除聊天信息
            scope.showItems = {};       // 内容区域tip
            scope.iconItems = {};       // 多选删除
            scope.delChatItem = [];     // 多选删除内容
            
            

            // 聊天内容区域点击
            scope.chatTip = function(e, index) {
                e.stopPropagation(); 
                if(scope.showChatDel) return;
                scope.showItems = {};
                scope.showItems[index] = true;

                console.log('----------------------聊天内容区域点击')
            };  

            // 聊天列表点击
            scope.cahtDetailSelect = function(e, index) {
                e.stopPropagation(); 
                var ele = angular.element('.button_'+index);
                scope.showItems = {}; 
                if(!scope.showChatDel) return;
                if(scope.iconItems[index]) {
                    scope.iconItems[index] = false;
                    scope.delChatItem.splice(index,1);
                } else { 
                    scope.iconItems[index] = true;
                    scope.delChatItem.push(index); 
                }
                
                

                console.log('----------------------聊天列表点击')
                console.log(scope.delChatItem.sort())
            }

            // 弹出层
            scope.TIP = {
                del : function() {},
                delAll : function(e) {
                    e.stopPropagation(); 
                    scope.showItems = {}; 
                    scope.showChatDel = true;

                    var input = angular.element('.input-box'),
                        el    = angular.element('.input-del');
                    input.removeClass('on');
                    var timer = $timeout(function() {
                        el.addClass('on')
                    },100);

                    scope.data.leftIcon  = '';
                    scope.data.leftTxt   = '取消';
                    scope.data.rightIcon  = '';
                    scope.data.leftClick  = function() {
                        scope.showChatDel = false;
                        scope.delChatItem = []; 
                        scope.data.leftTxt   = '微信';
                        scope.data.leftIcon  = 'ion-ios-arrow-left';
                        scope.data.rightIcon = 'ion-person';
                        
                        el.removeClass('on');
                        var timer = $timeout(function() {
                            input.addClass('on')
                        },100);
                    }
                    
                    

                    console.log('----------------------弹出层')
                }
            };

            // angular.element('.chatList,.item').on('click', function() {
            //     scope.showItems = {};
            //     //scope.showChatDel = false;
            //     console.log('----------------------body')
            // })

        }
    }
}])












// .directive('chatDetailList', [function() {
//     return {
//         restrict : 'EACM',
//         transclude : true,
//         template : '<ul class="list chatList" ng-transclude></ul>',
//         replace : true,
//         controller : function($scope) {
//         },
//         link : function(scope, element, attrs) {

//         }
//     };
// }])
// .directive('chatDetailItem',[function() {
//     return {
//         restrict : 'EACM',
//         replace : true,
//         templateUrl : 'templates/tpldirectives/chat-item.html',
//         scope : {
//             messages : "=detailMessages"
//         },
//         link : function(scope, element, attrs) {
//             scope.cahtDetailSelect = function(e) {
//                 e.preDefault();
//                 e.stopPropagation();
//             }
//             // element.on('click', function(e) {
//             //     e.preDefault();
//             //     e.stopPropagation();
//             //     alert();
//             // })
//         }
//     }
// }])
// .directive('chatTip',[function() {
//     return {
//         restrict : 'EACM',
//         template :  '<div class="tip tip-option">' +
//                     '<div class="tip-content">' +
//                     '<a href="" class="tip-item">复制</a>' +
//                     '<a href="" class="tip-item">转发</a>' +
//                     '<a href="" class="tip-item">收藏</a>' +
//                     '<a class="tip-item">翻译</a>' +
//                     '<a ng-click="TIP.del()" class="tip-item">删除</a>' +
//                     '<a ng-click="TIP.delAll()" class="tip-item">更多...</a>' +
//                     '</div>' + 
//                     '</div>',
//         replace : true,
//         link : function(scope, ele, attrs) {
//             scope.TIP = {
//                 delAll : function() {
//                     ele.parents('.item').removeClass('item-tip-on');    
//                     scope.common.showChatDel = true;
//                 }
//             }   
//         }
//     }
    
// }])
// detailTip
// .directive('detailtip', function() {
//     return {
//         replace : true,
//         link : function($scope, element, attrs) {
//             element.on('click', function() {
//                 element.parents('.item').addClass('item-tip-on');
//             })
//         }
//     }
// })

// tabs
.directive('chatTabs', function() {
    return {
        restrict : 'EACM',
        templateUrl : 'templates/tpldirectives/chat-tabs.html',
        link : function(scope, element, attrs) {
            element.find('.tab-item').on('click', function() {
                element.find('.tab-item').removeClass('active');
                angular.element(this).addClass('active');
            })
        }
    }
})
// header
.directive('chatHeader', function($interval) {
    return {
        restrict : 'EACM',
        templateUrl : 'templates/header.html',
        controller : function($scope, Data) {
            $scope.data = Data;
        },
        link : function(scope, element, attrs) {
        }
    }
});


