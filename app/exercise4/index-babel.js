'use strict';

// sjfas jdklfsdfs pepe
var chalk = require('chalk'),
    moment = require('moment'),
    val = require('../utils/validate');
imc = require('../utils/imc');

const height = process.argv[2],
      weight = process.argv[3];

function init() {
    let message = chalk.red('Revisa los datos');

    if (val.isNumber(height) && val.isNumber(weight)) {
        message = `
      Date: ${chalk.grey(moment())}
      Username: ${chalk.grey(process.env.USER)}
      Height: ${chalk.grey(height + 'm')}
      Weight:${chalk.grey(weight + 'Kg')}
      IMC:${chalk.grey.bold(imc.getIMC(height, weight))}
      ${imc.getMessage()}`;
    }
    //console.log(val.isNumber(height), val.isNumber(weight));
    console.log(message);
}

init();
