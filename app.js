// Pickup all the element from the html
const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');
const centerDot = document.getElementById('center-dot');

// Move the lines to certain degrees based on the actual time.
// Function to get the current time
function getTime() { 
  // Get current date
  const now = new Date();
  // Get current seconds
  const seconds = now.getSeconds();
    // Get current minutes
  const minutes = now.getMinutes();
    // Get current hour
  const hour = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360);
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30);
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;


}

// call every 100milliseconds to make sure it is accurate
setInterval(getTime, 100);

// Call the function getTime()
getTime();