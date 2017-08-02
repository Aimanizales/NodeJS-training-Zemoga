var chalk = require('chalk'),
    moment = require('moment'),
    inquirer = require('inquirer'),
    validate = require('../utils/validate'),
    imc = require('../utils/imc'),
    fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'weight',
    message: 'Please, write your weight (in Kilograms)',
    validate: function(value) {
      var pass = value.match(/(\d+)(\.\d+)?/g);
      if (pass) {
        return true;
      }
      return 'Please enter a valid weight (in Kilograms)';
    }
  }
  ,{
    type: 'input',
    name: 'height',
    message: 'Please, enter your height (in meters)',
    validate: function (value) {
      var pass = value.match(/(\d+)(\.\d+)?/g);
      if (pass) {
        return true;
      }
      return 'Please enter a valid height (in meters)';
    }
  }
]).then(function (answers) {
  let interval,
      height = answers.height,
      weight = answers.weight,
      imcValue = imc.getIMC(height, weight),
      dateNow = moment().format('MMMM Do YYYY, h:mm:ss a'),
      message = `
        Date: ${chalk.grey(dateNow)}
        Username: ${chalk.grey(process.env.USER)}
        Height: ${chalk.grey(height + 'm')}
        Weight:${chalk.grey(weight + 'Kg')}
        IMC:${chalk.grey.bold(imcValue)}
        Clasification:${imc.getMessageText(true)}`;

  console.log("calculando...");

  interval = setInterval(function(){
    console.log(message);
    writeFile(dateNow, imcValue, imc.getMessageText());
    clearInterval(interval);
  }, 1000);
});

function writeFile(date, imc, classification){
  let txt = date + '| IMC: ' + imc + ' : ' + classification + '\n',
      wstream = fs.createWriteStream('app/exercise3/results.txt', { flags: 'a'});

  console.log('Writing .txt file:\n', txt);
  wstream.write(txt);
  wstream.end();
}