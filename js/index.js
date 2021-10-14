$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

  })





// ボタンの色変え
  $('.button').on('click', function(){
    const color = $(this).text();
    $('.change').css('background-color', color);
  })

});