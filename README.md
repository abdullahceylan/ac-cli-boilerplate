# AC CLI App Boilerplate
## Features

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Lint** - Preconfigured _ESlint_ with _AC ESLint_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

## Commands
- `yarn clean` - Remove `build/` directory
- `yarn lint` - Run ESlint with ac-eslint-config
- `yarn build` - Babel will transpile ES6 => ES5 and minify the code.
- `yarn build:watch` - Babel will transpile ES6 => ES5 and minify the code in watch mode. Hence you can easily see the changes without build for each changes.
- `yarn prepublish` - Hook for npm. Do all the checks before publishing your module.
- `yarn release` - Hook for release. Do all the checks, create a new release and push to repository.
- `yarn publish` - Create a new release and publish to the global npm registry.
- `yarn publish:local` - Create a new release and publish to the local npm registry. You need to install `verdaccio` to able to use this.
- `yarn env` - Copy .env.dev file as .env to able to use environment variables. This is only for release/publish

## Development
- Clone this repo
- Create a `symlink` between project directory and executable command by running `yarn link` to able to test on local
- Run `yarn build:watch` to update the cli for every code changes
- Run `ac-cli-boilerplate test`

## Installation
- Run `npm install -g ac-cli-boilerplate`

## License

MIT © Abdullah M Ceylan
