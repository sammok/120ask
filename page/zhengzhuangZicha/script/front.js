// created by sam mok at 2014.5.5 20:41:29pm;

//common start
var common = {
    txtFocous:function (obj,text){
        /**
         *  txtObj,txtObj.text
         * eg：common.txtFocous(".input-name","please inter ur name");
         */
        $(obj).focus(function (){
            if ($(obj).val() == text){
                $(obj).val("");
            }
        }).blur(function (){
            if ($(obj).val() == ""){
                $(obj).val(text);
            }
        });
    },
    scrollToTarget:function (nav,btn,target){
        /**
         *  导航模块，导航模块到页顶的高度, 导航项的class(导航项class都相同), 目标点的class(目标点的class都相同);
         * API：common.scrollToTarget(".g-nav","647",".nav_btn",".nav-target");
         */
        var nav = $(nav);
        var navToTop = nav.offset().top;
        var btn = $(btn);
        var targetArr = [];
        var btnArr = [];

        $(window).scroll(function (){
            if ($(document).scrollTop() >= navToTop )
            {
                $(nav).css({position:"fixed",zIndex:"3000",top:"0"});
            }
            else
            {
                $(nav).css({position:"static",top:"0"});
            }

            for (var i = 0; i<targetArr.length; i++){
                if ($(window).scrollTop() == targetArr[i])
                {
                    $(btn).eq(i).siblings().find("a").removeClass("on");
                    $(btn).eq(i).find("a").addClass("on");
                    return true;
                }
            }
        });

        for (var i=0; i< $(target).length; i++){
            var num = $(target).eq(i).offset().top;
            targetArr.push(num);
        }

        for (var i=0; i< $(btn).length; i++){
            var o = $(btn).eq(i);
            btnArr.push(btn);
        }

        btn.click(function (){
            var self = $(this);
            self.siblings().find("a").removeClass("on");
            self.find("a").addClass("on");
            $("html,body").animate({scrollTop:(targetArr[self.index()] - nav.height()*2)});
        });
    },
    goTop : function (btn){
        //API: $(function (){common.goTop(".btn")});
        $(window).scroll(function (){
            var w = $(window).height();
            var d = $(document).scrollTop();
            if (d > w){$(btn).fadeIn();}else{$(btn).fadeOut();}
        });
        $(btn).click(function (){
            $("html,body").animate({scrollTop:0});
        });
    }
}

// core start;
var core = {
    lazyLoad : function (obj){
        /*
         *  Source: http://www.appelsiini.net/projects/lazyload    thanks to lazyload team;
         *  Eg: $("img").lazyload({effect:"fadeIn"});
         * */
        (function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else{if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0}else{if(++counter>settings.failure_limit){return false}}}})}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed}$.extend(settings,options)}$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(){return update()})}this.each(function(){var self=this;var $self=$(self);self.loaded=false;if($self.attr("src")===undefined||$self.attr("src")===false){if($self.is("img")){$self.attr("src",settings.placeholder)}}$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)}$("<img />").bind("load",function(){var original=$self.attr("data-"+settings.data_attribute);$self.hide();if($self.is("img")){$self.attr("src",original)}else{$self.css("background-image","url('"+original+"')")}$self[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return !element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.attr("data-"+settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(){if(!self.loaded){$self.trigger("appear")}})}});$window.bind("resize",function(){update()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){$window.bind("pageshow",function(event){if(event.originalEvent&&event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear")})}})}$(document).ready(function(){update()});return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=(window.innerHeight?window.innerHeight:$window.height())+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return !$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return !$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return $.inviewport(a,{threshold:0})},"above-the-fold":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return !$.rightoffold(a,{threshold:0})}})})(jQuery,window,document);
        $(obj).lazyload({effect:"fadeIn"});
    }
}



// init start;
var init = {
    autoInit : function (){
        //执行lazyload图片延迟加载;
        $(function (){core.lazyLoad("img");});
    },
    index : function (){

    }
}
//执行自动初始化;
init.autoInit();