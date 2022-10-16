"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generatePassword({ chars, length, }) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
function createPassword({ hasSymbols = true, hasNumbers = true, length = 8 }) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '@$%&-+_=*!';
    let chars = letters;
    hasNumbers && (chars += numbers);
    hasSymbols && (chars += symbols);
    return generatePassword({ chars, length });
}
exports.default = createPassword;
