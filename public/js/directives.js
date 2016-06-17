// rjCloseBackDrop 指令
angular.module('wechat.directives', []) 
.directive('chatDetailList', [function() {
    return {
        restrict : 'EACM',
        transclude : true,
        template : '<ul class="list chatList" ng-transclude></ul>',
        replace : true,
        scope : {},
        controller : function() {},
        link : function(scope, element, attrs) {
            // // 要在html 上添加点击事件
            // var htmlEl = angular.element(docuement.querySelector('html'));
            // htmlEl.on('click', function(event) {
            //     if(event.target.nodeName == 'HTML' && scope.popup.optionsPopup && scope.popup.isPopup) {
            //         scope.popup.optionsPopup.close();
            //         scope.popup.isPopup = false;
            //     }
            // });
            // element.find('a').on('click',function() {
            //     angular.element(this).parent().find('a').removeClass('active');
            //     angular.element(this).addClass('active');
            // })
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
        link : function(scope, element, attrs, chatDetailListController) {
            console.log(scope)
        }
    }
}])

