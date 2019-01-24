(function(){
    var $ = layui.jquery, form = layui.form, layer = layui.layer;

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
    $('.tb-megamenu .nav-collapse').toggleClass('open');

    //监听提交
    form.on('submit(edit-submit)', function(data){
        layer.msg(JSON.stringify(data.field));

        $.ajax({
            type: "POST",
            url: "/form.php",
            data: JSON.parse(data.field),
            dataType: "json",
            success: function(data){
                console.log(data.field);
            }
        });
        return false;
    });
})();