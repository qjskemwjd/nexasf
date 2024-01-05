$(function(){

 $('.m_gnb_right').click(function(){

    $('#gnbM').stop().animate({'right':0},500);
    $('.dimBg').stop().fadeIn(500);


 });

 $('.mobileMenuXbt').click(function(){

    $('#gnbM').stop().animate({'right':-300},500);
    $('.dimBg').stop().fadeOut(500);


 });

//  2depth 

$('.gnbDiv .one').click(function(){

    $('.gnbDiv .one').next().stop().slideUp();
    $(this).next().stop().slideDown();

}); 








});