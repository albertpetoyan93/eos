/**
 * Remove old files, copy front-end ones.Key	Function
 space	Opens popup and moves focus to the selected date, if there is none focuses on today.
 enter	Opens popup and moves focus to the selected date, if there is none focuses on today.
 Popup Keyboard Support
 Key	Function
 escape	Closes the popup and moves focus to the input element.
 tab	Moves focus to the next focusable element within the popup.
 shift + tab	Moves focus to the next focusable element within the popup.
 Header Buttons Keyboard Support
 Key	Function
 enter	Triggers the button action.
 space	Triggers the button action.
 
 */

import fs from "fs-extra";
import logger from "jet-logger";
import childProcess from "child_process";

/**
 * Start
 */
(async () => {
  try {
    // Remove current build
    await remove("./dist/");
    // Copy front-end files
    await copy("./src/public", "./dist/public");
    // Copy back-end files
    await exec("tsc --build tsconfig.prod.json", "./");
  } catch (err) {
    logger.err(err);
    process.exit(1);
  }
})();

/**
 * Remove file
 */
function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

/**
 * Copy file.
 */
function copy(src: string, dest: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return !!err ? rej(err) : res();
    });
  });
}
