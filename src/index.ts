import { marked } from 'marked';
import path from 'path';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getPackageName } from './lib/name';
import { readMarkdownFileSync, writeHtmlFileSync } from './lib/file';

type Args = {
  name?: string
  file: string
  out: string
}

const argv = yargs(hideBin(process.argv))
  .options({
    name: {
      type: 'boolean',
      describe: 'CLI名を表示'
    },
    file: {
      type: 'string',
      describe: 'Markdownファイルのパス'
    },
    out: {
      type: 'string',
      describe: 'html file',
      default: 'output/article.html'
    }
  })
  .argv as Args


if (argv.name) {
  const name = getPackageName();
  console.log(name);

  process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(__dirname, argv.out), html);
