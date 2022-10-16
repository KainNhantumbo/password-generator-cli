import fs from 'fs';
import { program } from 'commander';
import createPassword from './utils/passwordCreator';
import * as chalk from 'chalk';
import * as clipboardy from 'clipboardy';
const log = console.log;

program.version('1.0.0').description('Password Generator');
program
  .option('-l, --length <number>', 'password length')
  .option('-s, --save', 'save passwords to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();


const {length, save, isNumbers, isSymbols, l} = program.opts();
const generatedPassword = createPassword();

log({length, save, isNumbers, isSymbols});
log(`😘✔👍🎈✨🎉🎊🛡🛡🪁🤍💕💛💚🧡💙`);
