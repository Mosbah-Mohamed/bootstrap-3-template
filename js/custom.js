/*global $, console*/

$(document).ready(function () {

    "use strict";

    // nice scroll

    $('html,body').niceScroll({
        zindex: "9999",

    });

    // scroll to top

    var scrolltop = $('#scroll-top');

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 1500) {

            scrolltop.show();
        } else {
            scrolltop.hide();
        }

        scrolltop.click(function () {

            $('html,body').animate({ scrollTop: 0 }, 600);
        });
    });


    //scroll to sections

    $('.navbar ul li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 2000);
    });

    //show navbar

    $(window).scroll(function () {

        if ($(window).scrollTop() >= $('.navbar').height()) {

            $('.navbar').addClass("over");

        } else {

            $('.navbar').removeClass("over");
        }

    });

    $('.tabs .tab-switch li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        // hide all divs

        $('.tabs .tabs-content > div').hide();

        //show div conntect to link

        $('.' + $(this).data('class')).show();

    });


    //AOS

    $(function () {
        AOS.init()

        window.addEventListener('load', AOS.refresh)
    })


});