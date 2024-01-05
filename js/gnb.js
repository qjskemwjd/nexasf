$(function(){


    $('#gnb').hover(function(){

        $('.twoDbg').stop().slideDown(200);
        $('.twoD').stop().slideDown(200);

    },function(){
        $('.twoDbg').stop().slideUp(200);
        $('.twoD').stop().slideUp(200);
    });


    // 각 메뉴별 활성화

    $('#gnb .oneD').hover(function(){

        $(this).addClass('on');
        $(this).next().addClass('on');

    }, function(){

         $(this).removeClass('on');
         $(this).next().removeClass('on');

    })


    $('#gnb .twoD').hover(function(){

        $(this).addClass('on');
        $(this).prev().addClass('on');

    },function(){
        $(this).removeClass('on');
        $(this).prev().removeClass('on');
    })









});//doc