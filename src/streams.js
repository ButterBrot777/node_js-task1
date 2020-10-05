const { options } = require('./arguments');
const Stream = require('stream');
const path = require('path');
const fs = require('fs');

const { caesarShift } = require('./cipher');

const readStream = options.i ? fs.createReadStream(path.resolve(__dirname, options.i)) : process.stdin;
const writeStream = options.o ? fs.createWriteStream(path.resolve(__dirname, options.o), { 'flags': 'a+' }) : process.stdout;

const transformStream = new Stream.Transform({
	transform(chunk, encoding, callback) {
		const transformed = caesarShift(chunk.toString(), options.s);
		callback(null, transformed);
	},
});

module.exports = {
	readStream,
	writeStream,
	transformStream,
};
