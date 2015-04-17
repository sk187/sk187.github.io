// Event Listeners for About Me Section

$('.nav_btn').each(function(index) {
  $(this).on('click', function(){
    $('.active').removeClass('active')
    var info = $('.info').eq(index);
    info.toggleClass('active');
  });
});
