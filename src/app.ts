import fs from 'fs';
import { program } from 'commander';
import createPassword from './utils/password-creator';
import * as chalk from 'chalk';
import * as clipboardy from 'clipboardy';
const outputLogger = console.log;

program.version('1.0.0').description('Password Generator');
program
  .option('-l, --length <number>', 'password length')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .option('-s, --save', 'save passwords to passwords.txt')
  .parse();

const { length, isNumbers, isSymbols, isSave } = program.opts();
const generatedPassword = createPassword({
  hasSymbols: isSymbols,
  hasNumbers: isNumbers,
  length,
});

outputLogger(generatedPassword);
outputLogger(`😘✔👍🎈✨🎉🎊🛡🛡🪁🤍💕💛💚🧡💙`);
