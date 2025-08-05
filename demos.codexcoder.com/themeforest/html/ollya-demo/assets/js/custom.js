/*!
<----------------------------------------
  Theme Name: EnviShare
  Theme URI: http://codexcoder.com/
  Author: codexcoder.com
  Author URI: http://codexcoder.com/
  Description: EnviShare is a Creative Environment & Ecology HTML5 Template.
  Version: 1.0.0
  Tags: bio, charity, crowdfunding, eco, ecological, ecology, environment, environmental, green, green tech, natural, nature, nonprofit, organic, renewable
---------------------------------------->
*/

(function($) {
    "use strict";
    // Sticky Nav
    jQuery(window).on('scroll', function() {
        'use strict';
        if (jQuery(window).scrollTop() > 60) {
            jQuery('.header-section').addClass('animated fadeInDown fixed-top-menu');
        } else {
            jQuery('.header-section').removeClass('animated fadeInDown fixed-top-menu');
        }
    });

    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //HeaderBGChangeColor
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            scrollTop.show();
        } else {
            scrollTop.hide();
        }
    });
}(jQuery));