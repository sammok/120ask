// created by sam mok at 2014年10月7日 12:37:17 PM;
$( document).ready( function (){
    illnessSelectNav();
});

// TODO:部位与疾病的JSON数据;
var illnessData = [
    {
        index: 0,
        title: "背部",
        illness: [
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            },
            {
                txt: "关节炎",
                href: 'http://www.baidu.com'
            },

            {
                txt: "骨质疏松",
                href: 'http://www.baidu.com'
            }


        ]
    },

    {
        index: 1,
        title: "头部",
        illness: [
            {
                txt: "脑壳疼",
                href: 'http://www.baidu.com'
            },

            {
                txt: "脑震荡",
                href: 'http://www.baidu.com'
            }
        ]
    },

    {
        index: 2,
        title: "鼻部",
        illness: [
            {
                txt: "鼻子疼",
                href: 'http://www.baidu.com'
            },

            {
                txt: "鼻涕",
                href: 'http://www.baidu.com'
            }
        ]
    }
];

// 输出按部位分类的疾病侧栏导航;
function printIllnessData(index){
    // data链接的是部位与疾病的JSON数据 eg: data = illnessData;
    var data = illnessData[index];
    $('.illnessSelectNavigator h2').text(data.title);

    // create subItem;
    var itemStr = '';
    var itemData = data.illness;

    var i = 0, itemLen = itemData.length;
    for (; i < itemLen; i++){
        if (itemData[i]){
            itemStr += '<li><a href='+ itemData[i].href +' target="_blank">' + itemData[i].txt + '</a></li>';
        }
    }

    $('.illnessSelectNavigator .bd ul').html( itemStr);
    myScroll.refresh();
}


// 按部位选择侧弹导航;
var myScroll;
function illnessSelectNav(){
    var clientHeight = document.documentElement.clientHeight;

    var initScrollAreaHeight = function(){
        var hdHeight = $('.illnessSelectNavigator .tt').height();
        $('.illnessSelectNavigator .scrollWrap').height( (clientHeight - hdHeight - 20) + 'px');
    }();

    // init main scroll;
    myScroll = new IScroll('.illnessSelectNavigator .scrollWrap', {
        mouseWheel: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        vScrollbar : false
    });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    myScroll.refresh();


    $('.m_illnessBtnGroup2 .illnessBtnGroup_bd span').click( function (){
        if ($(this).hasClass('current')){
            $(this).removeClass('current')
        } else {
            $('this').addClass('current');
            $('.illnessSelectNavigator').addClass('illnessNavigator_show');
        }
    });

    $('.illnessNavigator .bg').click( function (){
        $('.illnessNavigator').removeClass('illnessNavigator_show');
    });
}