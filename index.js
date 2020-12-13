var readlineSync = require("readline-sync");
const chalk = require('chalk');




var userName = readlineSync.question("Enter your name: \n\n");
var userYear = readlineSync.question("Enter your year of birth \n\n");

leapYearChecker(userYear);

/*working function*/ 


function leapYearChecker(input)
{
  if(input % 4 == 0)
  {
    if(input % 100 == 0)
    {
      if(input % 400 == 0)
      {
        console.log(chalk.red("Wow "+ userName + ", your were born in a Leap Year."))
      }
      else
      {
        console.log(chalk.green(userYear+ " : is not a leap year"))
      }
    }
    else
    {
      console.log(chalk.red("Wow "+ userName + ", your were born in a Leap Year."))
    }
  }
  else
  {
    console.log(chalk.green(userYear+ " : is not a leap year"))
  }

  
}
