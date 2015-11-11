
describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a temperature of 20 degrees by default", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature by 1 degree", function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature by 1 degree", function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("minimum temperature should be 10 degrees", function(){
    for(i=0;i<10;i++){
      thermostat.decreaseTemp();
    }
    message = 'Cannot decrease temperature any further';
    expect(function(){thermostat.decreaseTemp();}).toThrow(new Error(message));
  });

  it("should have a max temp of 25 degrees when power saving mode is on", function() {
    thermostat.powerSavingModeOn();
    for(i=0; i < 5; i++) {
      thermostat.increaseTemp();
    }
    message = 'Cannot increase temperature any further';
    expect(function(){thermostat.increaseTemp();}).toThrow(new Error(message));
  });

  it("should have a max temp of 32 degrees when power saving mode is off", function() {
    thermostat.powerSavingModeOff();
    for(i=0; i < 12; i++) {
      thermostat.increaseTemp();
    }
    message = 'Cannot increase temperature any further';
    expect(function(){thermostat.increaseTemp();}).toThrow(new Error(message));
  });

  it("power saving mode is on by default", function(){
    expect(thermostat.isPowerSavingMode).toBe(true);
  });

  it("resets the temp to 20 degrees", function(){
    thermostat.increaseTemp();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be green when less than 18 degrees", function(){
    for(i=0;i<3;i++){
      thermostat.decreaseTemp();
    }
    expect(thermostat.colour()).toEqual('green');
  });

  it("should be yellow when less than 25", function(){
    expect(thermostat.colour()).toEqual('yellow');
  });

  it("should be red when greater than 25 degrees", function(){
    thermostat.powerSavingModeOff();
    for(i=0;i<5;i++){
      thermostat.increaseTemp();
    }
    expect(thermostat.colour()).toEqual('red');
  });
});
