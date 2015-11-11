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
});
