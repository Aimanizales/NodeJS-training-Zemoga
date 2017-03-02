var moment = require('moment'),
    colors = require('colors');

var hour = moment().hour();

if(hour < 12){
    console.log('Buenos días'.green);
}else if(hour >= 12 && hour < 18){
    console.log('Buenas tardes'.yellow);
}else{
    console.log('Buenas noches'.red);
}