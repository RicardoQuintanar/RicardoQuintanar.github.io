
$(document).ready(function () {

    // Initialize Sidenav
    $('.sidenav').sidenav();

    AOS.init();

    // Initialize Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // RESPONSIVE ABOUT BACKGROUND

    var vph;
    var nvh = $('#navbar').height();
    var scrollPosition = $(window).scrollTop();
    var landHeight = $('.intro').height();
    var aboutTrigger = landHeight - nvh;


    // SET NAV COLOR ON LOAD
    if (scrollPosition >= aboutTrigger) {

        // Set nav color on load       
        $("nav").addClass("scrolled");
        $("nav div ul li a" && "nav div a").addClass("scrolled-font");
    }


    // SET NAV COLOR ON SCROLL

    $(window).scroll(function () {
        nvh = $('#navbar').height();
        scrollPosition = $(window).scrollTop();
        landHeight = $('.intro').height();
        var aboutHeight = $('.imagine').height();

        // var projectsHeight = $('.project-section').height();
        aboutTrigger = landHeight - nvh;
        var projectsTrigger = aboutTrigger + aboutHeight + 10;
        var contactTrigger = $(document).height() - $(window).height() - 10;


        // Nav background color change
        if (scrollPosition >= aboutTrigger) {
            $("nav").addClass("scrolled");
            $("nav div ul li a" && "nav div a").addClass("scrolled-font");
        } else {
            $("nav").removeClass("scrolled");
            $("nav div ul li a" && "nav div a").removeClass("scrolled-font");
        }

        //======================================================================
        // CUSTOM SCROLLSPY ON SCROLL

        // ABOUT
        if (scrollPosition >= aboutTrigger && scrollPosition < projectsTrigger) {
            $(".nav-about").addClass('highlight').siblings().removeClass('highlight');
        } else {
            $(".nav-about").removeClass('highlight');
        }

        // PROJECTS
        if (scrollPosition >= projectsTrigger && scrollPosition < contactTrigger) {
            $(".nav-projects").addClass('highlight').siblings().removeClass('highlight');
        } else {
            $(".nav-projects").removeClass('highlight');
        }

        // CONTACT
        if (scrollPosition >= contactTrigger) {
            $(".nav-contact").addClass('highlight').siblings().removeClass('highlight');
            $(".nav-about").removeClass('highlight');
            $(".nav-projects").removeClass('highlight');
        } else {
            $(".nav-contact").removeClass('highlight');
        }
    });

    //======================================================================
    // CUSTOM SCROLLSPY ON LOAD

    nvh = $('#navbar').height();
    scrollPosition = $(window).scrollTop();
    landHeight = $('.intro').height();
    var aboutHeight = $('.imagine').height();
    // var projectsHeight = $('.project-section').height();
    aboutTrigger = landHeight - nvh;
    var projectsTrigger = aboutTrigger + aboutHeight + 10;
    var contactTrigger = $(document).height() - $(window).height() - 10;
    // ABOUT
    if (scrollPosition >= aboutTrigger && scrollPosition < projectsTrigger) {
        $(".nav-about").addClass('highlight').siblings().removeClass('highlight');
    } else {
        $(".nav-about").removeClass('highlight');
    }

    // PROJECTS
    if (scrollPosition >= projectsTrigger && scrollPosition < contactTrigger) {
        $(".nav-projects").addClass('highlight').siblings().removeClass('highlight');
    } else {
        $(".nav-projects").removeClass('highlight');
    }

    // CONTACT
    if (scrollPosition >= contactTrigger) {
        $(".nav-contact").addClass('highlight').siblings().removeClass('highlight');
        $(".nav-about").removeClass('highlight');
        $(".nav-projects").removeClass('highlight');
    } else {
        $(".nav-contact").removeClass('highlight');
    }


    //======================================================================
    // RESPONSIVE ABOUT SECTION
    // Set height on load

    vph = $(window).height();
    nvh = $('#navbar').height();
    $('.imagine').css({
        'height': vph - nvh + 'px'
    });

    $(window).resize(function () {
        vph = $(window).height();
        nvh = $('#navbar').height();
        $('.imagine').css({ 'height': vph - nvh + 'px' });
    });

    //======================================================================
    // HIGHLIGHT SECTION ON CLICK

    $('.nav-effect a').click(function () {
        $(this).closest("a").addClass('highlight').siblings().removeClass('highlight');
        return (false);  
    });

    //======================================================================
    // SMOOTH SCROLL ON CLICK

    var fromTop = 0;
    // Main
    $(".main-about").click(function () {
        fromTop = 0;
        $('html,body').animate({
            scrollTop: $(".imagine").offset().top - fromTop - nvh
        }, 'slow');
    });
    $(".main-projects").click(function () {
        fromTop = 10;
        $('html,body').animate({
            scrollTop: $("#projects").offset().top - fromTop - nvh
        }, 'slow');
    });
    $(".main-contact").click(function () {
        $('html,body').animate({
            scrollTop: $("footer").offset().top - fromTop - nvh
        }, 'slow');
    });

    // Mobile
    $(".side-about").click(function () {
        fromTop = 0;
        $('html,body').animate({
            scrollTop: $(".imagine").offset().top - fromTop - nvh
        }, 'slow');
    });
    $(".side-projects").click(function () {
        fromTop = 10;
        $('html,body').animate({
            scrollTop: $("#projects").offset().top - fromTop - nvh
        }, 'slow');
    });
    $(".side-contact").click(function () {
        $('html,body').animate({
            scrollTop: $("footer").offset().top - fromTop - nvh
        }, 'slow');
    });

    //======================================================================
    // HEADER

    // Fadeaway intro-container
    $(window).scroll(function () {
        $("#intro-container").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    // Hiding on load
    if ($(window).scrollTop() > 285) {
        $("#intro-container").css("display", "none");
    } else {
        $("#intro-container").css("display", "flex");
    }

    // Hiding div on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 285) {
            $("#intro-container").css("display", "none");
        } else {
            $("#intro-container").css("display", "flex");
        }
    });

    //======================================================================
    // PROJECTS
    // Hover over project thumbnail
    $(function () {
        $('.card').hover(
            function () {
                $(this).find('> .card-image > img.activator').click();
            }, function () {
                $(this).find('> .card-reveal > .card-title').click();
            }
        );
    });

    //======================================================================
    // ISOTOPE - Layout Plugin
    // bind filter button click
    $('.filters-button-group').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'span', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

});