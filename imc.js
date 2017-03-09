#!/usr/bin/env node

var chalk = require('chalk'),
    moment = require('moment');

var height = process.argv[2],
    weight = process.argv[3],
    imc = calculateIMC(),
    imcRanges = [{
      min: 0,
      max: 16,
      message: 'Infrapeso: Delgadez severa',
      color: 'bgRed'
    },
    {
      min: 16,
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

function calculateIMC(){
  return weight / Math.pow(height, 2);
}

function getIMCMessage(){
  let message = '';
  imcRanges.forEach(function(item, index){
    if(imc >= item.min && imc <= item.max){
      message = chalk.bold[item.color](item.message);
      return;
    }else if(imc < 0 || imc > 100) {
      message = chalk.red('IMC fuera del rango');
    }
  });
  return message;
}

(function(){
  if(height && !isNaN(height) && weight && !isNaN(weight)){
    console.log(chalk.grey(moment()), '\n',
      'Username: ', process.env.USER, '\n',
      'Height:', height + 'm  / Weight:', weight + 'kg\n',
      'IMC:', calculateIMC(), '\n', 
      getIMCMessage());
  }else{
    console.log('Revisa los datos');
  }
})();
