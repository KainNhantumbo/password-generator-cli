"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const passwordCreator_1 = __importDefault(require("./utils/passwordCreator"));
const log = console.log;
commander_1.program.version('1.0.0').description('Password Generator');
commander_1.program
    .option('-l, --length <number>', 'password length')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-s, --save', 'save passwords to passwords.txt')
    .parse();
const { length, isNumbers, isSymbols, isSave } = commander_1.program.opts();
const generatedPassword = (0, passwordCreator_1.default)({
    hasSymbols: isSymbols,
    hasNumbers: isNumbers,
    length,
});
log(generatedPassword);
log(`😘✔👍🎈✨🎉🎊🛡🛡🪁🤍💕💛💚🧡💙`);
