// accordion for leftside menu
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  } );

// menu for items in accordion (leftside menu)
$( function() {
    $( "#menu" ).menu();
  } );

//  resize for side bars
$(document).ready(function() {
	//60px - header
    $('.resize').height($(window).height()-60);
    $(window).resize(function() {
        $('.resize').height($(window).height()-60);
         })
    });

// sort for news
$( function() {
    $( "#sortable1" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable1" ).disableSelection();
  } );
// sort for timeline
$( function() {
    $( "#sortable2" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable2" ).disableSelection();
  } );

// toggle slide-effect for leftside menu via burger-btn
// link http://jqueryui.com/toggle/
$( function() {
    // run the currently selected effect
    function runEffect() {
      // Most effect types need no options passed by default
      var options = {};
      // Run the effect
      $( "#menu-slide-effect" ).toggle( "slide", options, 500 );
    };
 
    // Set effect from select menu value
    $( "#header2-menu-btn" ).on( "click", function() {
      runEffect();
    });
    $( "#header-menu-btn" ).on( "click", function() {
      runEffect();
    });
  } );

// progress-bar
$( function() {
    $(".progress-bar1").loading();
  } );

;
(function ($) {
  $.fn.loading = function () {
    var DEFAULTS = {
      backgroundColor: '#b6c0c1',
      progressColor: '#4b0082',
      percent: 75,
      duration: 2000
    };  
    
    $(this).each(function () {
      var $target  = $(this);

      var opts = {
      backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
      progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
      percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
      duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
      };
      // console.log(opts);
  
      $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');
  
      $target.find('.background').css('background-color', opts.backgroundColor);
      $target.find('.left').css('background-color', opts.backgroundColor);
      $target.find('.rotate').css('background-color', opts.progressColor);
      $target.find('.right').css('background-color', opts.progressColor);
  
      var $rotate = $target.find('.rotate');
      setTimeout(function () {  
        $rotate.css({
          'transition': 'transform ' + opts.duration + 'ms linear',
          'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
        });
      },1);   

      if (opts.percent > 50) {
        var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
        var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
        $target.find('.right').css({
          animation: animationRight,
          opacity: 1
        });
        $target.find('.left').css({
          animation: animationLeft,
          opacity: 0
        });
      } 
    });
  }
})(jQuery);