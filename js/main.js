// 自动加载函数
;$(function () {
    'use strict';
    var sidebar = $('#sidebar');  //选择侧栏
    var mask = $('.mask');  //选择蒙版
    var sidebar_trigger = $('#sidebar_trigger'); //选择侧栏触发器
    var backBtn = $('.back-to-top');    //选择返回顶部按钮
    var navbar = $('#navbar');

    navbar.delegate('li','click',function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    sidebar_trigger.on('click',showSidebar);    //监听侧栏触发器点击事件
    mask.on('click',hideSidebar);   //监听蒙版点击事件
    backBtn.on('click',toTop);  //监听返回顶部按钮点击事件
    $(window).on('scroll',showBackBtn); //监听window的scroll事件
    //页面一刷新就触发scroll事件
    // $(window).trigger('scroll');

    //显示侧栏
    function showSidebar() {
        mask.fadeIn();  //显示蒙版
        sidebar.animate({   //调整侧栏相关的css
            'right': 0
        })
    }

    //隐藏侧栏
    function hideSidebar() {
        mask.fadeOut(); //隐藏蒙版
        sidebar.animate({   //调整侧栏相关的css
            'right': -sidebar.width()+'px'
        })
    }

    function toTop() {
        $('html,body').animate({
            scrollTop: 0
        },800);
    }

    function showBackBtn() {
        //如果已滚动的部分高于窗口的高度
        if($(window).scrollTop()>$(window).height()){
            backBtn.fadeIn();
        } else{
            backBtn.fadeOut();
        }
    }
});