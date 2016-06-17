var wechat = angular.module('wechat', ['ionic', 'wechat.routes', 'wechat.directives', 'wechat.controllers'])
//这个地方的config不能少哦, 不然安卓平台的tabs会跑到顶部的
.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // 兼容安卓设备

}])
