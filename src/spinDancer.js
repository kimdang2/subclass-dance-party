var MakeSpinDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('nikita');
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.prototype.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function() {
  // initialize oldstep
  var oldStep = MakeDancer.prototype.step.bind(this);
  // set oldstep the oldversion of step
  oldStep();

  this.$node.addClass('spindance');
};