const { pipeline } = require('stream');
const fs = require('fs');
const options = require('./arguments');
const { promisify } = require('util');

const { readStream } = require('./streams');
const { writeStream } = require('./streams');
const { transformStream } = require('./streams');

pipeline(readStream, transformStream, writeStream, err => {
	if (err) {
		process.stderr.write('secret data was written');
	}
	process.stdout.write('secret data was written');
});

// const asyncPipe = promisify(pipeline);

// (async () => {
// 	try {
// 		await asyncPipe(readStream, transformStream, writeStream);
// 		process.stdout.write('secret data was written');
// 	} catch (err) {
// 		process.stderr.write('error: ', err.message);
// 	}
// })();
