$(function () {
    $('.scroll-down').click(function () {
        $('html').animate({
            scrollTop: $('section.second').offset().top - 100
        }, 'slow');
        return false;
    });
});