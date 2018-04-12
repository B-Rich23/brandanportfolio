$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    }); 

    var typed = new Typed(".typed", {
        strings: ["Full-Stack Web Developer.",
         "Software Engineer.", "Life-long Learner."],
         typeSpeed: 70,
         loop: true,
         startDelay: 1000,
         showCursor: false
    });
});