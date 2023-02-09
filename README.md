This repo is to demonstrate building a monorepo with...
- [lerna](https://lerna.js.org/)
- [storybook](https://storybook.js.org/)
- [lit](https://lit.dev/)

## Usage
1. Run command (In the root directory)
```
npx lerna bootstrap
```
(This installs the dependencies for all the packages)

2. Run command `npm run build` (Builds the packages, only need to do once)

3. Run command `npm run watch` (This will build the packages then watch for changes)

4. Run command `npm run storybook` (This starts storybook)
