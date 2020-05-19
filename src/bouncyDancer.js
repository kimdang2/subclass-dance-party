var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // Added these to make nodes bounce in different positions
  // this.$node = $('<span class="dancer bouncy"></span>'); //?
  // this.setPosition(top, left);

  this.$node.append('<img class="kimdang" src ="images/mini_zoro.png">');
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  // initialize oldstep
  var oldStep = MakeDancer.prototype.step.bind(this);
  // set oldstep the oldversion of step
  oldStep();

  this.$node.addClass('bouncy');
  // this.$node.toggleClass('bouncy');
};
