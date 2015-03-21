/* globals hopscotch: false */

$(function() {
  var resizeMiddle = function() {
    var height = $(window).height() - $('#top').height() - $('#bottom').height();
    $('#middle').height( height );
  };

  var onError = function() {
    var currStep = hopscotch.getCurrStepNum();
    console.log("Step not found: " + currStep);
    hopscotch.showStep(currStep + 1);
  };
  
  $(window).resize(resizeMiddle);
  resizeMiddle();

  var tour = {
    id: 'hello-hopscotch',
    steps: [
      {
        target: '#row1',
        title: 'Welcome to Hopscotch!',
        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
        placement: 'bottom'
      },
      {
        target: '#row2',
        title: 'Welcome to Hopscotch!',
        content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
        placement: 'bottom'
      }
    ],
    showPrevButton: true,
    onError: onError,
    skipIfNoElement: false
  }

  hopscotch.startTour(tour);
});

