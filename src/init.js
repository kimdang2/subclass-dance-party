$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); // MakeBlinkyDancer //MakeBouncyDancer //MakeSpinDancer
    console.log('dancerMakerFunctionName : ', dancerMakerFunctionName);
    var dancerMakerFunction = window[dancerMakerFunctionName];

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
    $('.dancer').addClass('lineUp');
    // hiding lineUpButton
    $(this).addClass('hide');
    // showing randomizeButton
    $('.randomizeButton').removeClass('hide');
  });

  $('.randomizeButton').on('click', function(event) {
    $('.dancer').removeClass('lineUp');
    $(this).addClass('hide');
    $('.lineUpButton').removeClass('hide');
  });

  $('.fredArmy').on('click', function(event) {
    $('.dancer').removeClass('kimdang johann nikita moonwalkImg').addClass('fred');
    $(this).addClass('hide');
    $('.unFred').removeClass('hide');
  });

  $('.unFred').on('click', function(event) {
    $('.dancer').removeClass('fred');
    $(this).addClass('hide');
    $('.fredArmy').removeClass('hide');
  });
});

