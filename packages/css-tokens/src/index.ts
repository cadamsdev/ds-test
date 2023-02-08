import { writeFileSync, existsSync, mkdirSync } from 'fs';

export interface Tokens {
  colors: {
    [key: string]: string;
  };
}

export default function main(): void {
  generateCssFile();
}

function generateCssFile(): void {
  if (!existsSync('./dist')) {
    mkdirSync('./dist');
  }

  const cssContents = createCssContents();
  writeCssFile(cssContents);
}

function createCssContents(): string {
  const tokens = getTokens();

  let contents = '';

  contents += ':root {\n';

  Object.entries(tokens.colors).forEach(([key, value]) => {
    contents += `\t--ecs-atlas-color-${key}: ${value}\n`;
  });

  contents += '}\n';

  return contents;
}

function writeCssFile(contents: string): void {
  writeFileSync('./dist/styles.css', contents);
}

function getTokens(): Tokens {
  return require('../tokens.json');
}

main();
