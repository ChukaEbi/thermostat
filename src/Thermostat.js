function Thermostat() {
    var DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.temperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature <= this.MIN_TEMP){
    throw new Error('Cannot decrease temperature any further');
  }
  this.temperature--;
};
