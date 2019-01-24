(function(){
    var $ = layui.jquery, form = layui.form, layer = layui.layer, view = layui.view;

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

    //监听提交
    form.on('submit(edit-submit)', function(data){
        layer.msg(JSON.stringify(data.field));

        var field = data.field;
        //请求接口
        view.req({
            url: '/form.php' //实际使用请改成服务端真实接口
            ,data: field
            ,done: function(res){
                layer.msg('Success', {
                    offset: '15px'
                    ,icon: 1
                    ,time: 1000
                }, function(){
                    // location.hash = '/user/login'; //跳转到登入页
                });
            }
        });

        // $.ajax({
        //     type: "POST",
        //     url: "/form.php",
        //     data: JSON.parse(data.field),
        //     dataType: "json",
        //     success: function(data){
        //         console.log(data.field);
        //     }
        // });
        return false;
    });
})();