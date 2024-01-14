import chalk from "chalk";

console.log(chalk.blue('I wondered why the frisbee kept getting bigger and bigger. Then it hit me.'));

const log = console.log;

log(chalk.rgb(71, 154, 214)('I ') 
+ ' wondered ' 
+ chalk.rgb(219, 88, 88)('why ')
+ chalk.rgb(219, 206, 88)('the ')
+ chalk.rgb(178, 88, 219)('frisbee ')
+ chalk.rgb(219, 88, 138)('kept ')
+ 'getting '
+ chalk.rgb(88, 173, 219)('bigger ')
+ chalk.rgb(219, 125, 88)('and ')
+ chalk.rgb(88, 219, 105)('bigger. ')
+ chalk.rgb(164, 88, 219)('Then ')
+ chalk.rgb(219, 88, 178)('it ')
+ chalk.rgb(145, 219, 88)('hit ')
+ chalk.rgb(219, 212, 88)('me.')
);
