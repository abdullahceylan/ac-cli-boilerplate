#!/usr/bin/env node
/* eslint-disable default-case */
const updater = require('update-notifier');
const semver = require('semver');
const program = require('commander');
const { prompt } = require('inquirer'); // require inquirerjs library
const { white, red, yellow, green } = require('kleur');
const boxen = require('boxen');
const { slugify } = require('./helpers');

require('pkginfo')(module);

const APP_NAME = 'AC CLI App Boilerplate';
const APP_VERSION = module.exports.version;
const PACKAGE_NAME = module.exports.name;

// Required min version of node.js
const MIN_NODE_VERSION = '6.9.0';

// Info box options
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'gray',
};

// Check if update is available
updater({ pkg: { name: PACKAGE_NAME, version: APP_VERSION } }).notify();

// if user try to execute the app using `sudo` then display a warning
if (process.getuid && process.getuid() === 0) {
  global.console.warn(
    yellow(
      `*** WARNING: *** ${APP_NAME} doesn't need superuser privileges. Don't run it under root!`,
    ),
  );
}

// if node.js version doesn't meet the required version
// give an error.
if (semver.satisfies(process.version, `>=${MIN_NODE_VERSION}`) === false) {
  global.console.error(
    red(
      `${APP_NAME} requires at least Node.js ${MIN_NODE_VERSION} or higher (you have ${process.version}), please upgrade your Node to the latest stable version.`,
    ),
  );
  process.exit(1);
}

// Craft questions to present to users
const questions = [
  {
    type: 'list',
    name: 'list_example',
    message: 'This is a list menu example',
    choices: ['Menu 1', 'Menu 2', 'Menu 3'],
    filter: val => ({ id: slugify(val), title: val }),
  },
  {
    type: 'input',
    name: 'input_example',
    message: 'This is an input example',
    default: () => 'this is default value',
  },
];

// CLI app version
program.version(APP_VERSION).description(APP_NAME);

// CLI app commands
program
  .command('test')
  .alias('t')
  .description('Test command')
  .action(() => {
    global.console.log(boxen(white(`${APP_NAME} - v${APP_VERSION}`), boxOptions));

    prompt(questions).then(answers => {
      //console.log('answers: ', answers);

      global.console.log(
        green(
          `You have selected ${white().bold(
            answers.list_example.title,
          )} list item and have entered ${white().bold(answers.input_example.title)} to the input!`,
        ),
      );
    });
  });

// Assert that a VALID command is provided
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv);
