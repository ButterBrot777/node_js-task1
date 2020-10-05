# RS School Caesar Cipher CLI

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

To run the app you must be in folder ***./node_js-task1*** and write `node my_caesar_cli.js` and add options.

This application accepts several options as input in the command line:
```
-a,--action - write "encode" or "decode";
-s,--shift - write shift when encrypting or decrypting;
-i,--input - choose the file from which to read a secret message: -i input.txt;
-o,--output - select the file in which you want to write the results of the program -o output.txt
```
Parameters **action** and **shift** are mandatory.
Parameters **input** and **output** are optional.


## Examples

```
node my_caesar_cli.js -s 3 -a encode
node my_caesar_cli.js -s 3 -a encode -i ./input.txt
node my_caesar_cli.js -s 3 -a encode -i ./input.txt -o ./output.txt
node my_caesar_cli.js -s 3 -a decode
```