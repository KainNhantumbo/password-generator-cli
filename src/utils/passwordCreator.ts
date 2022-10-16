function generatePassword<T extends { chars: string; length: number }>({
  chars,
  length,
}: T): string {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function createPassword(
  hasSymbols: boolean = true,
  hasNumbers: boolean = true,
  length: number = 8
): string {
  const letters: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers: string = '0123456789';
  const symbols: string = '@$%&-+_=*!';
  let chars = letters;
  hasNumbers && (chars += numbers);
  hasSymbols && (chars += symbols);
  return generatePassword({ chars, length });
}
export default createPassword;
