var chalk = require('chalk'),
    moment = require('moment'),
    inquirer = require('inquirer'),
    validate = require('../utils/validate'),
    imc = require('../utils/imc'),
    fs = require('fs');
    wstream = fs.createWriteStream('imc-results.txt');

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
  /*,{
    type: 'list',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask for opening hours',
      {
        name: 'Contact support',
        disabled: 'Unavailable at this time'
      },
      'Talk to the receptionist'
    ]
  }
  ,{
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    filter: function (val) {
      return val.toLowerCase();
    }
  },
	{
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese'
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed'
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian'
      }
    ]
	}
  ,{
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false
	}
  ,{
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke']
  }
  ,{
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!'
  }
  ,{
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when: function (answers) {
      return answers.comments !== 'Nope, all good!';
    }
	}
  ,{
    type: 'expand',
    message: 'Conflict on `file.js`: ',
    name: 'overwrite',
    choices: [
      {
        key: 'y',
        name: 'Overwrite',
        value: 'overwrite'
      },
      {
        key: 'a',
        name: 'Overwrite this one and all next',
        value: 'overwrite_all'
      },
      {
        key: 'd',
        name: 'Show diff',
        value: 'diff'
      },
      new inquirer.Separator(),
      {
        key: 'x',
        name: 'Abort',
        value: 'abort'
      }
    ]
	}
  ,{
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  }
  ,{
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      }
      return 'Please enter a valid phone number';
    }
	}*/
]).then(function (answers) {
  let interval,
      height = answers.height,
      weight = answers.weight,
      imcValue = imc.getIMC(height, weight),
      clasification = imc.getMessage(),
      message = `
        Date: ${chalk.grey(moment())}
        Username: ${chalk.grey(process.env.USER)}
        Height: ${chalk.grey(height + 'm')}
        Weight:${chalk.grey(weight + 'Kg')}
        IMC:${chalk.grey.bold(imcValue)}
        Clasification:${imc.getMessage()}
          `,
      //For .txt file, use '+' instead '${}'
      messageFile = '\nDate: ' + moment() +
        '\nIMC: ' + imcValue + 
        '\nClasification:' + clasification;
  
  console.log("calculando...");

  interval = setInterval(function(){
    console.log(message);

    console.log('Text to be printed in the .txt file:\n', messageFile);
    
    wstream.write(messageFile);
    wstream.end();
    //console.log('imc-results.txt generated');
    clearInterval(interval);
  }, 1000);
  
  
  //console.log(JSON.stringify(answers, null, '  '));
});