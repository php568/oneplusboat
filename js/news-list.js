(function(){
    var $ = layui.jquery;

    $('.tb-megamenu ul.nav li.mega').mouseenter(function(){
        $(this).addClass('open');
    });
    $('.tb-megamenu ul.nav li.mega').mouseleave(function(){
        $(this).removeClass('open');
    });
    $('.tb-megamenu-button').click(function() {
        if(parseInt($(this).parent().children('.nav-collapse').height())) {
            // $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
            $('.tb-megamenu .nav-collapse').toggleClass('close');
        }
        else {
            // $(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
            $('.tb-megamenu .nav-collapse').toggleClass('open');
        }
    });
    $('.tb-megamenu .nav-collapse').toggleClass('open');
})();