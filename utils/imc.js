const chalk = require('chalk'),
  imcRanges = [
    {
    min: 0,
    max: 15.99,
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

let IMC = 0;

module.exports = {
  getIMC: function(h, w){
    IMC = w / Math.pow(h, 2);
    return IMC;
  },
  getMessage: function(){
    message = chalk.red('IMC está fuera del rango permitido');
    const range = imcRanges.find(element => IMC >= element.min && IMC <= element.max);
    
    if (range) {
      message = chalk.bold[range.color](range.message);
    }
    return message;
  }
}