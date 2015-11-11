function Thermostat() {
    var DEFAULT_TEMP = 20;
    this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.temperature = function() {
  return this.temperature;
}

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
}
