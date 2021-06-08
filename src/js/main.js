$('.navbar-toggler').click(function() {
    if($('.toggle').hasClass('d-block') === true) {
        $('.toggle').removeClass('d-block').addClass('d-none');
        $('.close').removeClass('d-none').addClass('d-block');
    } else if($('.close').hasClass('d-block') === true) {
        $('.toggle').removeClass('d-none').addClass('d-block');
        $('.close').removeClass('d-block').addClass('d-none');
    }
});