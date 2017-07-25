#!/usr/bin/env node
var chalk = require('chalk'),
    moment = require('moment');

var height = process.argv[2],
    weight = process.argv[3],
    imc = weight / Math.pow(height, 2),
    imcRanges = [{
      min: 0,
      max: 16,
      message: 'Infrapeso: Delgadez severa',
      color: 'bgRed'
    },
    {
      min: 16.01,
      max: 16.99,
      message: 'Infrapeso: Delgadez moderada',
      color: 'red'
    },
    {
      min: 17,
      max: 18.49,
      message: 'Infrapeso: Delgadez aceptable',
      color: 'magenta'
    },
    {
      min: 18.5,
      max: 24.99,
      message: 'Peso normal',
      color: 'green'
    },
    {
      min: 25,
      max: 29.99,
      message: 'Sobrepeso',
      color: 'yellow'
    },
    {
      min: 30,
      max: 34.99,
      message: 'Obeso: Tipo I',
      color: 'red'
    },
    {
      min: 35,
      max: 39.99,
      message: 'Obeso: Tipo II',
      color: 'bgRed'
    },
    {
      min: 40,
      max: 100,
      message: 'Obeso: Tipo III',
      color: 'bgRed'
    }];

function getIMCMessage(){
  let message = chalk.red('IMC out or range');
  const range = imcRanges.find(element => imc >= element.min && imc <= element.max);
  if (range) {
    message = chalk.bold[range.color](range.message);
  }
  return message;
}

function init(){
  let message = 'Revisa los datos';

  if(!isNaN(height) && !isNaN(weight)){
    message = `
      Date: ${chalk.grey(moment())}
      Username: ${chalk.grey(process.env.USER)}
      Height: ${chalk.grey(height + 'm')}
      Weight:${chalk.grey(weight + 'Kg')}
      IMC:${chalk.grey.bold(imc)}
      ${getIMCMessage()}
    `;
  }
  console.log(message);
}

init();