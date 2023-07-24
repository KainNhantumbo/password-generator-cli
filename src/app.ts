#!/usr/bin/env node
import { info } from 'node:console';
import { program } from 'commander';
import savePassword from './utils/password-saver';
import createPassword from './utils/password-creator';

program.version('1.0.0').name('pasgen').description('Password Generator CLI');
program
  .option('-s, --save', 'save passwords to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-l, --length <number>', 'password length')
  .option('-ns, --no-symbols', 'remove symbols');
program.parse();

const options = program.opts();

const generatedPassword = createPassword({
  hasSymbols: options.symbols,
  hasNumbers: options.numbers,
  length: options.length,
});

// writes the password to passwords.txt
options.save && savePassword(generatedPassword);

info(`🤍 Generated Password: ${generatedPassword}`);
