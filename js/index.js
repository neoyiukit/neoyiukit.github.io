(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
    this.element = this.options.element
    this.$element = $(this.element)
    this.createWrapper()
    this.createWaypoint()
  }

  /* Private */
  Sticky.prototype.createWaypoint = function() {
    var originalHandler = this.options.handler

    this.waypoint = new Waypoint($.extend({}, this.options, {
      element: this.wrapper,
      handler: $.proxy(function(direction) {
        var shouldBeStuck = this.options.direction.indexOf(direction) > -1
        var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

        this.$wrapper.height(wrapperHeight)
        this.$element.toggleClass(this.options.stuckClass, shouldBeStuck)

        if (originalHandler) {
          originalHandler.call(this, direction)
        }
      }, this)
    }))
  }

  /* Private */
  Sticky.prototype.createWrapper = function() {
    if (this.options.wrapper) {
      this.$element.wrap(this.options.wrapper)
    }
    this.$wrapper = this.$element.parent()
    this.wrapper = this.$wrapper[0]
  }

  /* Public */
  Sticky.prototype.destroy = function() {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy()
      this.$element.removeClass(this.options.stuckClass)
      if (this.options.wrapper) {
        this.$element.unwrap()
      }
    }
  }

  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck',
    direction: 'down right'
  }

  Waypoint.Sticky = Sticky
}())
;

$(function() { 
	  $('span.pullquote').each(function() { 
		var $parentParagraph = $(this).parent('p'); 
		$(this).clone() 
		  .addClass('pulledquote')
		  .appendTo($parentParagraph); 
	  }); 
    $(".article-details-wrapper").fitText(10, { minFontSize: '7px' });
    $("span.pulledquote").fitText(4.2, { minFontSize: '13px' });
    $(".article-sidebar").fitText(2, { minFontSize: '9.5px' });
    $('h1.article-title').lettering('words')  
    $( "#home-cover" ).css( "height", function () {
      return (this.bottom = $('.bgImg').outerHeight(true)+$('#article-details').outerHeight(true))
    }
);
});

var sticky = new Waypoint.Sticky({
  element: $('#article-details')[0]
})
var sticky = new Waypoint.Sticky({
  element: $('#read_more')[0]
})

$('#neo-images').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('#read_more').localScroll();
$('#press-home').localScroll();
$('#press-profile').localScroll();
$('#press-exp').localScroll();
$('#press-skills').localScroll();
$('#press-blog').localScroll();
$('#press-project').localScroll();
$('#press-image').localScroll();
$('#press-contact').localScroll();

$( "#btn-menu" ).click(function() {
$( "#menu" ).toggleClass( "close" );
});

// right-hand dot navigation
  $('body').scrollspy({ 
      target: '#mainnav', 
      offset: 000
  });  
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {                   
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 500);
              return false;
          }
      }
  });    
