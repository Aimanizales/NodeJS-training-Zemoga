# NodeJS  - Intro Workshop Zemoga
[ZEM-NodeJS training](https://bitbucket.org/zemoga/zem-nodejs-training/wiki/Home)

_Apr 27th 2017_

## Why Node?
### Pros:
- Node NASA (?), Uber, Twitter mobile, Godaddy adquires Nodejitsu, Likedin Mobile
- NodeJs can be a complement of your Stack 
- Fast
- Push Services
- Huge Community

### Cons:
- Single thread (CPU)
- Painful when working with SQL-DB

**Node is C** 

## First Steps
1. Install NodeJS [About NodeJS versions](https://github.com/nodejs/LTS)
2. Install `nvm` (avoid using `n` due issues with npm)
3. Create `.nvmrc`:
```bash
$ nvm -v
$ nvm list //
$ nvm use [version] // Select version
$ nvm alias default 6 //Configure default version of Node
```


### Node Packages
- Versions of packages installed depends of the version of Node used.
- Avoid global instalation
- Use package.json
- semantic versioning (read)
- Node caches modules **important**
- [requirung modules](https://medium.freecodecamp.com/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)

```
npm install [package][@version]
```

 ## Initializing a project

```js
npm init [-y] //
npm rc
```

versioning


## npm scripts
built-in npm scripts:
```
npm install
npm prestart
npm start
npm posstart
npm test
```

custom scripts
`npm run [script name]`
`



