#	PackageStarter

Boilerplate repo that serves as a starting point when writing new NPM packages.
This repo is setup for development and testing to be done in [Typescript](https://www.typescriptlang.org/).

##	Setup

1.	**Fork** this repo into a new repository.
2.	Clone down the repo and update the following fields in "package.json":
	* name
	* description
3.	Run ```npm install``` in your terminal to pull down all dependencies.
4.	Done! Get to work ;)

***

##	Development

Development is done in [Typescript](https://www.typescriptlang.org/), that is then compiled into plain NodeJS targetting the latest Ecmascript specification.

###	/src & index.ts

The entry file in this repo is **/src/index.ts**. Add any aditional folders or files necessary inside the src folder, and expose the necessary code by exporting it from **index.ts**.

###	/src/\_\_tests__

Unit tests should be placed inside this folder, with files named the same as the source file they are testing, but changing the extension from **.ts** to **.test.ts**. Thus, a file containing unit tests for _index.ts_ should be named _index.test.ts_.

We'll be writing our unit tests with [Jest](https://jestjs.io/), which is included in the repo. Here is an example of how a test might look:

```javascript
/** 
 * index.test.ts
 *
 * Testfile that runs unit tests for src/index.ts
 */
import { sum } from '../index'

describe('index.ts', () => {
	test('Sum', () => {
		expect(sum(2, 2)).toBe(4)
	})
})
```


***

##	Publishing

The publish script defaults to publishing as private. If you want to publish something as public, make sure to use the following script:

```npm publish --access=public```.

Before publishing, make sure you have added the proper version to package version by using the **version** script.

***

##	Scripts

These are some scripts to make development, testing and publishing of libraries easier:

### 	Test
	
```npm run test``` Will run all unit tests in the repo and display results in the terminal.

###		Build

```npm run build``` will compile all of your typescript into the **lib** folder.

###		Watch

```npm run watch``` will rebuild your code into the **lib** folder as changes in the code take place.

###		Lint

```npm run lint``` will go through your code and alert you of any syntax that doesn't follow the established styleguide.

###		Version

```npm version <patch | minor | major>``` will add a new patch, minor or major version to package.json

###		Publish

```npm run publish``` publishes your package to NPM.