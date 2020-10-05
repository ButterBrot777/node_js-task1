const argv = require('minimist')(process.argv)

const options = {
	s: argv.s ? argv.s : argv.shift,
	i: argv.i ? argv.i : argv.input,
	o: argv.o ? argv.o : argv.output,
	a: argv.a ? argv.a : argv.action,
}

if (!options.s) {
	console.log('Hello! Here you can create a secret message with help the Caeser cipher')
	console.error('You must write parameter -s or --shift from 0 till 26 alphabet letters. Please try again!')
	process.exit(200)
}

if (options.a !== 'encode' && options.a !== 'decode') {
	console.log('Hello! Here you can create a secret message with help the Caeser cipher')
	console.error('You must write param -a or --action like "encode" or "decode". Please try again!')
	process.exit(200)
}

if (options.a === 'decode') options.s = -(options.s)

console.log('You are working with the next options: ', options)

module.exports = { options };