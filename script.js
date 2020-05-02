$(function(){
  $('.button').on('click', function(){
    const color = $(this).text();
    $('.change').css('background-color', color);
  })
});