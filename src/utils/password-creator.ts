type TGenerateProps = { chars: string; length: number };
type TCreateProps = {
  hasSymbols?: boolean;
  hasNumbers?: boolean;
  length?: number;
};

/**
 * Generates the password
 * @returns string
 */
const generatePassword = ({ chars, length }: TGenerateProps): string => {
  let password: string = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

/**
 * Creates the password
 * @returns string
 */
const createPassword = ({
  hasSymbols = true,
  hasNumbers = true,
  length = 8,
}: TCreateProps): string => {
  const letters: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers: string = '0123456789';
  const symbols: string = '@$%&-+_=*!';
  let chars: string = letters;
  hasNumbers && (chars += numbers);
  hasSymbols && (chars += symbols);
  return generatePassword({ chars, length });
};

export default createPassword;
