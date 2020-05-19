var MakeMoonwalkDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('moonwalkImg');
};

MakeMoonwalkDancer.prototype = Object.create(MakeDancer.prototype);
MakeMoonwalkDancer.prototype.constructor = MakeMoonwalkDancer;

MakeMoonwalkDancer.prototype.step = function() {
  // initialize oldstep
  var oldStep = MakeDancer.prototype.step.bind(this);
  // set oldstep the oldversion of step
  oldStep();

  this.$node.addClass('moonwalk');
};