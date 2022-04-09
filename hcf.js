/* In the below given line we have created an constant variable name readline to display the line in command line interface using the ‘readline’ module of Javascript which provides a way of reading a datastream, one line at a time */

const readline = require('readline');

/* In the below given line we have created an constant variable name rl with readline createinterface module to listen the input using the process.stdn and to deliver the shell output we have used process.stdout*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/* In the below line we have defined a question to input a first number. */

rl.question('Write a First Number ', function (number1) {

/* In the below line we have defined a second question to input a second number. */

 rl.question('Write a Second Number ', function (number2) {

/* Now In the below lines we will perform the mathematical calculation to find the HCF of numbers given by the user. 



First we will check whether both the inputs given by the users are the same if they are not then processed for the next step. */

          while(number1 != number2){
/* The below line checks whether number1 is greater than number 2 or not.  If number1 is greater than number1 then number1 is subtracted from number2 and stored in the number1 variable. */
    if(number1 > number2) {

        number1 -= number2;
    }
/* If number1 is less than number2 then number2  is subtracted from number1 and stored in the number2 variable. */
    else {
        number2 -= number1;
    }
}

/* Now we can display the output on the command line using console.log. */

console.log(`HCF is ${number1}`);
          rl.close();
  });
});

/* After finishing the datastream input/output we should close the contact rl by using the below lines of code. */
rl.on('close', function () {
  console.log('\n HCF is calculated');
  process.exit(0);
});

