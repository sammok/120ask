/* Created by brother wolf At: 2014/9/21 14:21:26 */
var wenbing = {};

// 组件容器;
wenbing.unit = {};


// 头部导航切换效果;
wenbing.unit.headerSlideMenu = function (){
    // 主体效果在html结构的data-am-collapse属性调用, 此段代码为为菜单按钮添加 active状态;
    $('.header_menu, .header_menuBody .btn_showUp').click( function(){
        if ($('.header_menuBody').hasClass('am-in')){
            $('.header_menu').removeClass('current');
        } else {
            $('.header_menu').addClass('current');
        }
    });
};



/** 统一调用 */
$( function (){
   wenbing.unit.headerSlideMenu();
});