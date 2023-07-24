#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const password_creator_1 = __importDefault(require("./utils/password-creator"));
const password_saver_1 = __importDefault(require("./utils/password-saver"));
const outputLogger = console.log;
commander_1.program.version('1.0.0').name('pasgen').description('Password Generator CLI');
commander_1.program
    .option('-s, --save', 'save passwords to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-l, --length <number>', 'password length')
    .option('-ns, --no-symbols', 'remove symbols');
commander_1.program.parse();
const options = commander_1.program.opts();
const generatedPassword = (0, password_creator_1.default)({
    hasSymbols: options.symbols,
    hasNumbers: options.numbers,
    length: options.length,
});
options.save && (0, password_saver_1.default)(generatedPassword);
outputLogger(`🤍 Generated Password: ${generatedPassword}`);
