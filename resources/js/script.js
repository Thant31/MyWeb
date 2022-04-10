$(document).ready(function(){
    $(".js-up").click(function(){
        var r=$('.js--counts').text();
        r=parseInt(r)+1;
        $('.js--counts').text(r);

})
});
$(".js--up").click(function(){
    var u=$('.js-count').text();
    u=parseInt(u)+1;
    $('.js-count').text(u);

});
$('.line').click(function(){
    var f=$('.js--fa').text();
    f=parseInt(f)+1;
    $('.js--fa').text(f);

});
$('.js-cdn').click(function(){
    var c=$('.js-cdn-count').text();
    c=parseInt(c)+1;
    $('.js-cdn-count').text(c);

});
$('.cdnj').click(function(){
   var a= $('.cdn-eye').text();
    a=parseInt(a)+1;
    $('.cdn-eye').text(a);

});
$('.js--auto').click(function(){
    var b=$('.js-auto-count').text();
    b=parseInt(b)+1;
    $('.js-auto-count').text(b);

});
$('.js-auto').click(function(){
   var d= $('.auto').text();
    d=parseInt(d)+1;
    $('.auto').text(d);

});
$('.js-wave').click(function(){
    var e=$('.js--wave').text();
    e=parseInt(e)+1;
    $('.js--wave').text(e);

});
$('.wave').click(function(){
   var h= $('.waves').text();
    h=parseInt(h)+1;
    $('.waves').text(h);

});

//   $('.wavepoint').waypoint(function(direction){
//      if(direction == down){
//          alert('j');
//      }
//   })
  
  $('.wavepoints').waypoint(function(direction){
    $('.wavepoints').addClass('animated fadeIn');
},{
    offset:'50%'

})