// rjCloseBackDrop 指令
angular.module('wechat.directives', []) 
.directive('chatDetailList', [function() {
    return {
        restrict : 'EACM',
        transclude : true,
        template : '<ul class="list chatList" ng-transclude></ul>',
        replace : true,
        controller : function($scope) {
        },
        link : function(scope, element, attrs) {

        }
    };
}])
.directive('chatDetailItem',[function() {
    return {
        restrict : 'EACM',
        replace : true,
        templateUrl : 'templates/tpldirectives/chat-item.html',
        scope : {
            messages : "=detailMessages"
        },
        link : function(scope, element, attrs) {
            scope.cahtDetailSelect = function(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            // element.on('click', function(e) {
            //     e.preventDefault();
            //     e.stopPropagation();
            //     alert();
            // })
        }
    }
}])
.directive('chatTip',[function() {
    return {
        restrict : 'EACM',
        template :  '<div class="tip tip-option">' +
                    '<div class="tip-content">' +
                    '<a href="" class="tip-item">复制</a>' +
                    '<a href="" class="tip-item">转发</a>' +
                    '<a href="" class="tip-item">收藏</a>' +
                    '<a class="tip-item">翻译</a>' +
                    '<a ng-click="TIP.del()" class="tip-item">删除</a>' +
                    '<a ng-click="TIP.delAll()" class="tip-item">更多...</a>' +
                    '</div>' + 
                    '</div>',
        replace : true,
        link : function(scope, ele, attrs) {
            scope.TIP = {
                delAll : function() {
                    ele.parents('.item').removeClass('item-tip-on');    
                    scope.common.showChatDel = true;
                }
            }   
        }
    }
    
}])
// detailTip
.directive('detailtip', function() {
    return {
        replace : true,
        link : function($scope, element, attrs) {
            element.on('click', function() {
                element.parents('.item').addClass('item-tip-on');
            })
        }
    }
})

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
        link : function(scope, element, attrs) {
        }
    }
});


