import chalk from 'chalk';
import fs from 'fs';
import os from 'os';
import path from 'path';

export default function savePassword(password: string): void {
  fs.open(
    path.join(__dirname, 'passwords.txt'),
    'a',
    666,
    (err: NodeJS.ErrnoException | null, id): void => {
      if (err)
        return fs.close(id, () => {
          console.log(
            chalk.redBright(
              '🚨 There was an error saving your password to a file. '
            )
          );
        });

      return fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log(
            chalk.greenBright('✔ Password saved successfuly to passwords.txt!')
          );
        });
      });
    }
  );
}
