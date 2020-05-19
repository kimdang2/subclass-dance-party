$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); // MakeBlinkyDancer //MakeBouncyDancer //MakeSpinDancer
    console.log('dancerMakerFunctionName : ', dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(window);

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    console.log('dancer : ', dancer);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.lineUpButton').on('click', function(event) {
    // for (var i = 0; i < window.dancers.length; i++) {
    //   window.dancers[i].lineUp();
    //   console.log(window.dancers[i]);
    // }
    $('.dancer').addClass('lineUp');
    // hiding lineUpButton
    $(this).addClass('hide');
    // showing randomizeButton
    $('.randomizeButton').removeClass('hide');
  });

  $('.randomizeButton').on('click', function(event) {
    // for (var i = 0; i < window.dancers.length; i++) {
    //   window.dancers[i].lineUp();
    //   console.log(window.dancers[i]);
    // }
    $('.dancer').removeClass('lineUp');
    // hiding randomizedButton
    $(this).addClass('hide');
    // showing lineUpButton
    $('.lineUpButton').removeClass('hide');
  });

});

