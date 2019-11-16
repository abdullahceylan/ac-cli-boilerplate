const childProcess = require('child_process');
const path = require('path');

const USER_HOME_DIR = require('os').homedir();
const APP_ROOT = path.resolve(__dirname, '..');
const CURRENT_DIR = process.cwd();
const PATCH_TIMESTAMP = Date.now();

const slugify = (text, separator) =>
  text
    .split(' ')
    .join(separator || '-')
    .toLowerCase();

/**
 * @param {string} command A shell command to execute
 * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
 * @example const output = await execute("ls -alh");
 */
const execute = command => {
  /**
   * @param {Function} resolve A function that resolves the promise
   * @param {Function} reject A function that fails the promise
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   */
  return new Promise(function(resolve, reject) {
    /**
     * @param {Error} error An error triggered during the execution of the childProcess.exec command
     * @param {string|Buffer} standardOutput The result of the shell command execution
     * @param {string|Buffer} standardError The error resulting of the shell command execution
     * @see https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
     */
    childProcess.exec(command, function(error, standardOutput, standardError) {
      if (error) {
        reject();

        return;
      }

      if (standardError) {
        reject(standardError);

        return;
      }

      resolve(standardOutput);
    });
  });
};
module.exports = {
  USER_HOME_DIR,
  APP_ROOT,
  CURRENT_DIR,
  PATCH_TIMESTAMP,
  slugify,
};
