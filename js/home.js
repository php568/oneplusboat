(function(){
    var $ = layui.jquery, laytpl = layui.laytpl, carousel = layui.carousel;
    var i = 0;
    var video_list = [
        {title:"视频1", isplay:false, type:"video/mp4", url: "http://118.25.5.174:8001/sites/default/files/video/index-1.mp4", image:"http://118.25.5.174:8001/sites/default/files/video/index-1.jpg", dateTime:"2018-12-25 21:30"},
        {title:"视频2", isplay:false, type:"video/mp4", url: "http://118.25.5.174:8001/sites/default/files/video/index-2.mp4", image:"http://118.25.5.174:8001/sites/default/files/video/index-2.jpg", dateTime:"2018-12-25 21:30"},
        {title:"视频3", isplay:false, type:"video/mp4", url: "http://118.25.5.174:8001/sites/default/files/video/index-3.mp4", image:"http://118.25.5.174:8001/sites/default/files/video/index-3.jpg", dateTime:"2018-12-25 21:30"},
    ];

    var data = {
        "title":"video-image",
        "list":video_list
    }

    // $("img").lazyload({ threshold : 200 });

    var player = videojs("index-video", {
        "width":"100%",
        "poster":"",
        "autoplay":true,
        "controls":true,
        "sources":[{
            src: video_list[i].url,
            type: video_list[i].type
        }],
    }, function(){
        this.on('loadeddata',function(){

        })
        this.on('ended',function(){
            i++;
            if(i >= video_list.length){
                i = 0;
            }
            var videoObj = video_list[i];
            this.src({type: videoObj.type, src: videoObj.url});
            this.play();

            $(".video-img").removeClass('current');
            $("#video"+i+" img").addClass('current');

            // $("#intro-1 .but_right").trigger('click');
        })
    });

    var getTpl = $('#video-image').html(), view = $('#video-view');

    laytpl(getTpl).render(data, function(html){
        view.html(html);
        $("#video-view ul li:first-child img").addClass('current');

        $('#intro-1').mouseenter(function(){
            if(!$(this).is(":animated")){
                $("#intro-1 .but_left").stop(true,false).delay(200).animate({'opacity': 1});
                $("#intro-1 .but_right").stop(true,false).delay(200).animate({'opacity': 1});
            }
        });
        $('#intro-1').mouseleave(function(){
            if(!$(this).is(":animated")){
                $("#intro-1 .but_left").stop(true,false).delay(200).animate({'opacity': 0});
                $("#intro-1 .but_right").stop(true,false).delay(200).animate({'opacity': 0});
            }
        });

        $("#intro-1 .but_left").bind('click', function(){
            var last = $("#video-view ul li:last-child").clone(true);
            $("#video-view ul").stop().prepend(last);
            $("#video-view ul li:last-child").remove();
        });
        $("#intro-1 .but_right").bind('click', function(){
            var first = $("#video-view ul li:first-child").clone(true);
            $("#video-view ul").stop().append(first);
            $("#video-view ul li:first-child").remove();
        });

        $(".video-a img").bind('click', function(){

            $(".video-img").removeClass('current');
            $(this).addClass('current');
            var src = $(this).attr('data-src');
            var type = $(this).attr('data-type');
            player.src({type: type, src: src});
            player.play();

            i = $(this).attr('border');

            // if(i==(video_list.length-1)){
            //     $("#intro-1 .but_right").trigger('click');
            // }else if(i==1){
            //     $("#intro-1 .but_left").trigger('click');
            // }else if(i>tmp_i){
            //     $("#intro-1 .but_left").trigger('click');
            // }else if(i<tmp_i){
            //     $("#intro-1 .but_right").trigger('click');
            // }
        });
    });

    //建造实例
    var ins = carousel.render({
        elem: '#flexslider-2',
        width: '100%', //设置容器宽度
        height: '426px',
        anim: 'fade' //切换动画方式
    });
    $('.layui-carousel-arrow').html('');
    // $('.front #content').delay(600).animate({'top': '40px'}, 1200);
    // $('.front .sidebars .sidebar').delay(600).animate({'top': '43px'}, 1200);
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

    if($(window).width() <=375){
        $('#flexslider-2').height('226px');
    }else if(376< $(window).width() && $(window).width() <=414){
        $('#flexslider-2').height('251px');
    }else{
        $('#flexslider-2').height('426px');
    }

})();