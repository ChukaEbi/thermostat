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
});
