$('.project_btn').each(function(index) {
  $(this).on('click', function(){
    $(this).addClass('selected')
    $('.project_btn').not(this).removeClass('selected')
    var tab = ($('.project.info').eq(index))
    var otherTabs = ($('.project.info').not(tab))
    console.log(index)

    if (otherTabs.hasClass('active')){
        otherTabs.removeClass('active');
        otherTabs.addClass('vis_hidden');
        setTimeout(function(){
            otherTabs.addClass('hidden');
        },20)
    }

    if (tab.hasClass('hidden')){
        tab.removeClass('hidden');
        setTimeout(function(){
            tab.removeClass('vis_hidden')
            tab.addClass('active')
        }, 50)
    }
    //Closes active tab
    else{
        tab.addClass('vis_hidden');
        tab.removeClass('active');
        tab.one('transitionend',function(event){
            tab.addClass('hidden');
        });
    }
  });
});

$('.nav_btn').each(function(index) {
  $(this).on('click', function(){
    $(this).addClass('selected')
    $('.nav_btn').not(this).removeClass('selected')
    var tab = ($('.about.info').eq(index))
    var otherTabs = ($('.about.info').not(tab))

    if (otherTabs.hasClass('active')){
        otherTabs.removeClass('active');
        otherTabs.addClass('vis_hidden');
        setTimeout(function(){
            otherTabs.addClass('hidden');
        },20)
    }

    if (tab.hasClass('hidden')){
        tab.removeClass('hidden');
        setTimeout(function(){
            tab.removeClass('vis_hidden')
            tab.addClass('active')
        }, 50)
    }
    //Closes active tab
    else{
        tab.addClass('vis_hidden');
        tab.removeClass('active');
        tab.one('transitionend',function(event){
            tab.addClass('hidden');
        });
    }
  });
});


$('.clin_btn').each(function(index) {
  $(this).on('click', function(){
    $(this).addClass('selected')
    $('.clin_btn').not(this).removeClass('selected')
    var tab = ($('.clin.info').eq(index))
    var otherTabs = ($('.clin.info').not(tab))

    if (otherTabs.hasClass('active')){
        otherTabs.removeClass('active');
        otherTabs.addClass('vis_hidden');
        setTimeout(function(){
            otherTabs.addClass('hidden');
        },20)
    }

    if (tab.hasClass('hidden')){
        tab.removeClass('hidden');
        setTimeout(function(){
            tab.removeClass('vis_hidden')
            tab.addClass('active')
        }, 50)
    }
    //Closes active tab
    else{
        tab.addClass('vis_hidden');
        tab.removeClass('active');
        tab.one('transitionend',function(event){
            tab.addClass('hidden');
        });
    }
  });
});