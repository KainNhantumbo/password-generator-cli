import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export default function savePassword(password: string): void {
  fs.open(
    path.join(__dirname, '../', 'passwords.txt'),
    'a',
    666,
    (err: NodeJS.ErrnoException | null, id): void => {
      if (err)
        return fs.close(id, () => {
          console.log('🚨 There was an error saving your password to a file.');
        });

      return fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log('✔ Password saved successfuly to passwords.txt!');
        });
      });
    }
  );
}
