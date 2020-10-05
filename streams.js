const Stream = require('stream');
const caesarShift = require('./chipher');
const path = require('path');
const fs = require('fs');

const options = require('./src/arguments');

const readStream = options.i ? fs.createReadStream(path.resolve(__dirname, options.i)) : process.stdin;
const writeStream = options.o ? fs.createWriteStream(path.resolve(__dirname, options.o)) : process.stdout;

console.log('READSTREAM: ', readStream.path)

const transformStream = new Stream.Transform({
	transform(chunk, encoding, callback) {
		const transformed = caesarShift(chunk.toString(), options.s);
		callback(null, transformed);
	}
});

module.exports = {
	readStream, writeStream, transformStream
}