$( function (){
    // 当主选项卡切换到设置的时候将腿部资讯按钮收起;
    function togglePageFooter(){
        var isLast = $('.am-tab-panel:last').hasClass('am-active');
        if (isLast){
            $('.myZone_ft').hide();
        }
        $('.myZone_bd .am-tabs-nav li').click( function (){
            var isLast = $('.am-tab-panel:last').hasClass('am-active');
            if (isLast){
                $('.myZone_ft').hide();
            } else {
                $('.myZone_ft').show();
            }
        });
    }
    togglePageFooter();
});