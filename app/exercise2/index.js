/**
 * Exercise 2
 * 
 */

//npm run exercise2 [height in meters] [weight in kilograms]

let chalk = require('chalk'),
    moment = require('moment'),
    val = require('../utils/validate'); // "./" avoids node_modules folder
    imc = require('../utils/imc');

const height = process.argv[2],
    weight = process.argv[3];

function init(){
  let message = chalk.red('Revisa los datos');

  if(val.isNumber(height) && val.isNumber(weight)){
    message = `
      Date: ${chalk.grey(moment())}
      Username: ${chalk.grey(process.env.USER)}
      Height: ${chalk.grey(height + 'm')}
      Weight:${chalk.grey(weight + 'Kg')}
      IMC:${chalk.grey.bold(imc.getIMC(height, weight))}
      ${imc.getMessage()}`;
  }
  console.log(message);
}

init();
