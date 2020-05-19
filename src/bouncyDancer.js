var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.step(); // sets oldstep to makeBlinkyStep & replaces line 40
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  // initialize oldstep
  var oldStep = MakeDancer.prototype.step.bind(this);
  // set oldstep the oldversion of step
  oldStep();
  this.$node.toggle();
};
