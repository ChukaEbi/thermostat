function Thermostat() {
    this.LOW_ENERGY_USAGE = 18;
    this.HIGH_ENERGY_USAGE = 25;
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.temperature = this.DEFAULT_TEMP;
    this.isPowerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isPowerSavingMode) {
    if (this.temperature >= 25) {
        throw new Error('Cannot increase temperature any further');
    }
  }
  if (!this.isPowerSavingMode) {
    if (this.temperature >= 32) {
      throw new Error('Cannot increase temperature any further');
    }
  }
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature <= this.MIN_TEMP){
    throw new Error('Cannot decrease temperature any further');
  }
  this.temperature--;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.isPowerSavingMode = true;
};

Thermostat.prototype.isPowerSavingMode = function() {
  return this.isPowerSavingMode;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.isPowerSavingMode = false;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.colour = function() {
  if(this.temperature < this.LOW_ENERGY_USAGE){
    return 'green';
  }
  else if((this.temperature > this.LOW_ENERGY_USAGE) && (this.temperature < this.HIGH_ENERGY_USAGE)){
    return 'yellow';
  }
  else {
    return 'red';
  }
};
