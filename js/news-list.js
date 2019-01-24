(function(){
    var $ = layui.jquery;

    $('.tb-megamenu ul.nav li.mega').mouseenter(function(){
        $(this).addClass('open');
    });
    $('.tb-megamenu ul.nav li.mega').mouseleave(function(){
        $(this).removeClass('open');
    });
    $('.tb-megamenu-button').click(function() {
        // if(parseInt($(this).parent().children('.nav-collapse').height())) {
        //     // $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
        //     $(this).parent().children('.nav-collapse').removeClass('close');
        //     $(this).parent().children('.nav-collapse').addClass('open');
        // }
        // else {
        //     // $(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
        //     $(this).parent().children('.nav-collapse').removeClass('open');
        //     $(this).parent().children('.nav-collapse').addClass('close');
        // }
        $('.tb-megamenu .nav-collapse').toggleClass('open');
    });
    $('.tb-megamenu .nav-collapse').toggleClass('open');
})();