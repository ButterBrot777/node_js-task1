const argv = require('minimist')(process.argv)
const fs = require('fs');

const options = {
	s: argv.s ? argv.s : argv.shift,
	i: argv.i ? argv.i : argv.input,
	o: argv.o ? argv.o : argv.output,
	a: argv.a ? argv.a : argv.action,
}

if (!options.s) {
	console.log('Hello! Here you can create a secret message with help the Caesar cipher')
	console.error('You must write parameter -s or --shift from 0 till 26 alphabet letters. Please try again!')
	process.exit(1)
}

if (options.a !== 'encode' && options.a !== 'decode') {
	console.log('Hello! Here you can create a secret message with help the Caesar cipher')
	console.error('You must write param -a or --action like "encode" or "decode". Please try again!')
	process.exit(1)
}

if (options.i) {
	fs.promises.access(options.i, fs.constants.F_OK).catch(err => {
		process.stderr.write(`File ${options.i} ${err.code === 'ENOENT' ? 'does not exist' : 'can not read'}`);
		process.exit(1);
	});
}

if (options.o) {
	fs.promises.access(options.o, fs.constants.F_OK).catch(err => {
		process.stderr.write(`File ${options.o} ${err.code === 'ENOENT' ? 'does not exist' : 'can not write'}`);
		process.exit(1);
	});
}

if (options.a === 'decode') options.s = -(options.s)

console.log('You are working with the next options: ', options)

module.exports = { options };
