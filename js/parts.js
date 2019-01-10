(function(){
    var $ = layui.jquery, laytpl = layui.laytpl;

    layer.photos({
        photos: '#block-views-parts-products-block',
        anim: 5, //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        area: ['690px', '400px'],
        shift: 1,
        closeBtn:1
    });
    $('.tb-megamenu ul.nav li.mega').mouseenter(function(){
        $(this).addClass('open');
    });
    $('.tb-megamenu ul.nav li.mega').mouseleave(function(){
        $(this).removeClass('open');
    });
})();