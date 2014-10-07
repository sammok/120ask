// created by sam mok at 2014年10月7日 12:37:17 PM;
$( document).ready( function (){
    headerSelectNav();
});

function headerSelectNav(){
    var clientHeight = document.documentElement.clientHeight;
    var mainScroll,
        subItemScroll;

    var initScrollAreaHeight = function(){
        var hdHeight = $('.headerSelectNavigator .tt').height();
        var ttHeight = $('.headerSelectNavigator dt').height();
        $('.headerSelectNavigator .scrollWrap').height( (clientHeight - hdHeight - 20) + 'px');
        $('.headerSelectNavigator dd').height( (clientHeight - hdHeight - ttHeight) + 'px');
    }();

    // init main scroll;
    mainScroll = new IScroll('.headerSelectNavigator .scrollWrap', {
        mouseWheel: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        vScrollbar : false
    });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


    // init click event for item to show item's content;

    $('.headerSelectNavigator dt').click( function (){
        var body = $(this).next();
        $('.headerSelectNavigator dd').hide();

        if (body.hasClass('down')){
        // if items'content is visible now;

            $('.headerSelectNavigator dt').show();
            body.hide();
            body.toggleClass('down');
            mainScroll.enable(); //允许主滚动条滚动;
        } else {
            $('.headerSelectNavigator dt').hide();
            $(this).show();
            body.show();
            body.toggleClass('down');

            mainScroll.disable(); //禁止主滚动条滚动;

            // 初始化子滚动条;
            $('.headerSelectNavigator dd').removeClass('subItemScroll');
            body.addClass('subItemScroll');
            subItemScroll = new IScroll('.subItemScroll', {
                mouseWheel: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                vScrollbar : false
            });
        }


        mainScroll.refresh();
        subItemScroll.refresh();
    });

    $('.cityNavigatorBtn').click( function (){
        if ($(this).hasClass('current')){
            $(this).removeClass('current')
        } else {
            $('this').addClass('current');
            $('.headerSelectNavigator').addClass('cityNavigator_show');
        }
    });

    $('.cityNavigator .bg').click( function (){
        $('.cityNavigator').removeClass('cityNavigator_show');
    });
}