import fs from 'fs';

export const readMarkdownFileSync = (path: string):string => {
  const markdownStr = fs.readFileSync(path, { encoding: 'utf-8' });

  return markdownStr;
}

export const writeHtmlFileSync = (path: string, html: string):void => {
  fs.writeFileSync(path, html, { encoding: 'utf-8' });
}
