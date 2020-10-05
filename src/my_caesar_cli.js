const { pipeline } = require('stream');
const fs = require('fs');
const options = require('./arguments');

const { readStream } = require('./streams');
const { writeStream } = require('./streams');
const { transformStream } = require('./streams');

if (options.i) {
	fs.promises.access(options.i, fs.constants.F_OK | fs.constants.R_OK).catch(err => {
		process.stderr.write(`File ${options.i} ${err.code === 'ENOENT' ? 'does not exist' : 'can not read'}`);
		process.exit(200);
	});
}

if (options.o) {
	fs.promises.access(options.o, fs.constants.F_OK | fs.constants.W_OK).catch(err => {
		process.stderr.write(`File ${options.o} ${err.code === 'ENOENT' ? 'does not exist' : 'can not write'}`);
		process.exit(200);
	});
}

pipeline(readStream, transformStream, writeStream, err => {
	if (err) {
		console.log(err.message);
	}
	console.log('secret data was written');
});
