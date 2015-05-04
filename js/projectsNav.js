$('.project_btn').each(function(index) {
  $(this).on('click', function(){
    $('.project_btn.selected').removeClass('selected')
    $(this).addClass('selected');
    $('.project.info.active').removeClass('active');
    var info = $('.project.info').eq(index);
    info.toggleClass('active');
  });
});