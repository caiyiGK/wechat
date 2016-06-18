// rjCloseBackDrop 指令
angular.module('wechat.directives', []) 
.directive('chatDetailList', [function() {
    return {
        restrict : 'EACM',
        transclude : true,
        template : '<ul class="list chatList" ng-transclude></ul>',
        replace : true,
        scope : {},
        controller : function($scope) {
        },
        link : function(scope, element, attrs) {

        }
    };
}])
.directive('chatDetailItem',[function() {
    return {
        require : '^?chatDetailList',
        restrict : 'EACM',
        replace : true,
        transclude : true,
        templateUrl : 'templates/tpldirectives/chat-item.html',
        scope : {
            messages : "=detailMessages"
        },
        controller : function($scope) {
        },
        link : function(scope, element, attrs) {

        }
    }
}])
.directive('chatTip',[function() {
    return {
        require : '^?chatDetailList',
        restrict : 'EACM',
        template :  '<div class="tip tip-option">' +
                    '<div class="tip-content">' +
                    '<a href="" class="tip-item">复制</a>' +
                    '<a href="" class="tip-item">转发</a>' +
                    '<a href="" class="tip-item">收藏</a>' +
                    '<a class="tip-item">翻译</a>' +
                    '<a ng-click="TIP.del(message.id)" class="tip-item">删除</a>' +
                    '<a ng-click="TIP.delMany()" class="tip-item">更多...</a>' +
                    '</div>' + 
                    '</div>',
        replace : true,
        scope : {
            message : '=detailId',
        },
        controller : function($scope) {
            $scope.TIP = {  
                del : function(id) {
                    alert(id)
                },
                delMany : function() {
                    console.log($scope.common);
                    // if(!$scope.common.showChatDel) {
                    //     $scope.common.showChatDel = true;
                    // }
                }
            }

        },
        link : function(scope, element, attrs, chatDetailListController) {
            //console.log(scope.message);

        }
    }
    
}])
// detailTip
.directive('detailtip', function($interval) {
    return {
        link : function(scope, element, attrs) {
            element.on('click', function() {
                element.parents('.item').addClass('item-tip-on');
            })
        }
    }
});


