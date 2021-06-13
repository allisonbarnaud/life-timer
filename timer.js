var counter_list = [0,0,0,0];
var secondsCounter = counter_list[0];
var minutesCounter = counter_list[1];
var hoursCounter = counter_list[2];
var daysCounter = counter_list[3];
var display_str = "";
var display_div = document.getElementById("display_div_id");

var lifeExpectancy = 84;
var checkDate = new Date(); 
var currentDate = "Time left: " + checkDate.getDate() + "/"
                + (checkDate.getMonth()+1)  + "/" 
                + checkDate.getFullYear();

var currentTime = checkDate.getHours() + ":"  
                + checkDate.getMinutes() + ":" 
                + checkDate.getSeconds();
                

  function incrementCount(){

    var ageInput = parseInt(document.getElementById("age").value);
    secondsCounter += ageInput;

    var finalDate = "End date: " + checkDate.getDate() + "/"
                + (checkDate.getMonth()+1)  + "/" 
                + (checkDate.getFullYear()+lifeExpectancy-ageInput)

    console.log(finalDate)

    setInterval(function(){
      console.log(currentDate)
      console.log(currentTime)
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      
      secondsCounter++;
      if (secondsCounter > 59) {
        secondsCounter = 0; // reset count
        minutesCounter++;   // increase next count
      }
      if (minutesCounter > 59) {
        minutesCounter = 0;
        hoursCounter++;
      }
      display_str = hoursCounter.toString() + " hour(s), " + minutesCounter.toString() + " minute(s), " + secondsCounter.toString() + " second(s).";
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }