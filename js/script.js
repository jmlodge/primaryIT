$(document).ready(function() {
    $('#mobile').on("mouseenter", function () {
        $(this).find('.slide-up').stop().animate({height: "90%"})
    });
    $('#mobile').on("mouseleave", function () {
        $(this).find('.slide-up').stop().animate({height: "15%"}, 1000, function () {

        })
    })
});
