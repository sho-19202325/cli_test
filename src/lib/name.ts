import path from 'path';
import fs from 'fs';

const packageStr = fs.readFileSync(path.resolve(__dirname, '..', '..', 'package.json'), { encoding: 'utf-8' });
const parsedPackage = JSON.parse(packageStr);

export const getPackageName = ():string => {
  return parsedPackage.name;
}
