//Define function,function name and parameter
function speedDetector(speed) {
    //Declare the variables speed limit and number of demeritPoints point
        const speedLimit = 70;
        const demeritPoints = 5;
    //Calculate number of points based on the speed
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
    //Check if speed is within stated limit and return "ok" if its within
        if (speed <= speedLimit) {
          return "Ok";
        } 
    //Check if the number of points exceeds requirement for license suspension
        else if (points >12) {
            return "License suspended";
          } 
    //Return number of points,if neither of above conditions is met
        else {
            return  "Points:",points;
          }
        }