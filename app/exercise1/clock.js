var moment = require('moment'),
  colors = require('colors'),
  hour = moment().hour(),
  message = '';

if(hour < 12){
  message = 'Buenos días'.green;
}else if(hour >= 12 && hour < 18){
  message = 'Buenas tardes'.yellow;
}else{
  message = 'Buenas noches'.red;
}

console.log(message);