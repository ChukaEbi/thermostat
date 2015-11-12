$(document).ready(function(){
  thermostat = new Thermostat();
  $('#display').prepend(thermostat.temperature);
  $('#increaseTemp').on('click',function(){
    thermostat.increaseTemp();
    $('#display').text(thermostat.temperature);
  });

  $('#decreaseTemp').on('click',function(){
    thermostat.decreaseTemp();
    $('#display').text(thermostat.temperature);
  });

  $('#resetTemp').on('click',function(){
    thermostat.resetTemp();
    $('#display').text(thermostat.temperature);
  });

  $('#psmOn').on('click',function(){
    thermostat.powerSavingModeOn();
    $('#psm').text('on');
  });

  $('#psmOff').on('click',function(){
    thermostat.powerSavingModeOff();
    $('#psm').text('off');
  });
});
