// Event Listeners for About Me Section

$('.nav_btn').each(function(index) {
  $(this).on('click', function(){
    $('.nav_btn.selected').removeClass('selected')
    $(this).addClass('selected');
    $('.active').removeClass('active');
    var info = $('.about.info').eq(index);
    info.toggleClass('active');
  });
});

$('.clin_btn').each(function(index) {
  $(this).on('click', function(){
    $('.clin_btn.selected').removeClass('selected')
    $(this).addClass('selected');
    $('.clin.info.active').removeClass('active');
    var info = $('.clin.info').eq(index);
    info.toggleClass('active');
  });
});