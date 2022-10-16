/**
 * Generates the password
 * @returns string
 */
function generatePassword<T extends { chars: string; length: number }>({
  chars,
  length,
}: T): string {
  let password: string = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

/**
 * Creates the password
 * @returns string
 */
function createPassword<
  U extends { hasSymbols?: boolean; hasNumbers?: boolean; length?: number }
>({ hasSymbols = true, hasNumbers = true, length = 8 }: U): string {
  const letters: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers: string = '0123456789';
  const symbols: string = '@$%&-+_=*!';
  let chars: string = letters;
  hasNumbers && (chars += numbers);
  hasSymbols && (chars += symbols);
  return generatePassword({ chars, length });
}
export default createPassword;
