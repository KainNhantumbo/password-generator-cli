import { program } from 'commander';
import createPassword from './utils/password-creator';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import savePassword from './utils/password-saver';
const outputLogger = console.log;

program.version('1.0.0').name('pasgen').description('Password Generator CLI');
program
  .option('-s, --save', 'save passwords to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-l, --length', 'password length')
  .option('-ns, --no-symbols', 'remove symbols');
program.parse();

const options = program.opts();

const generatedPassword = createPassword({
  hasSymbols: options.symbols,
  hasNumbers: options.numbers,
  length: options.length,
});

// // writes the password to passwords.txt
options.save && savePassword(generatedPassword);

outputLogger(`🤍 Generated Password: ${generatedPassword}`);
outputLogger(options);
