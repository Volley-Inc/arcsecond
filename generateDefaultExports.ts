import { readFileSync } from 'fs';

const source = readFileSync('./index.mjs', 'utf8');

const re = /(?<=^export const )\w+/gm;
let m: RegExpExecArray | undefined = undefined;
const matches: string[] = [];

do {
  m = re.exec(source);
  if (m) {
    matches.push(m[0])
  }
} while (m);

console.log(`export default {\n${matches.map(x => `  ${x}`).join(",\n")}\n}`)