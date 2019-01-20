(function(){
    var $ = layui.jquery, laytpl = layui.laytpl, carousel = layui.carousel;

    layer.photos({
        photos: '#block-views-homepage-products-block',
        anim: 5, //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        closeBtn:1
    });

    //建造实例
    var ins = carousel.render({
        elem: '#flexslider-2',
        width: '100%', //设置容器宽度
        height: '426px',
        anim: 'fade' //切换动画方式
    });
    $('.layui-carousel-arrow').html('');
    $('.front #content').delay(600).animate({'top': '40px'}, 1200);
    $('.front .sidebars .sidebar').delay(600).animate({'top': '43px'}, 1200);
    $('.tb-megamenu ul.nav li.mega').mouseenter(function(){
        $(this).addClass('open');
    });
    $('.tb-megamenu ul.nav li.mega').mouseleave(function(){
        $(this).removeClass('open');
    });
    $('.tb-megamenu-button').click(function() {
        if(parseInt($(this).parent().children('.nav-collapse').height())) {
            $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
        }
        else {
            $(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
        }
    });
})();