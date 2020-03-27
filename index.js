const validator = require("validator");
const chalk = require("chalk");
// const argumentVectors = process.argv;
const yargs = require('yargs');

// console.log('Hello world is working!!', validator.isEmail('sumit@fusioncharts.com'), argumentVectors[2])
const note = []

yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function () {
        console.log('Adding note -', chalk.red(yargs.argv.title))
        note.push({
            id: note.length,
            title: yargs.argv.title,
            content: ''
        })
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing a note -', chalk.red(yargs.argv.title))
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note -', chalk.red(yargs.argv.title))
    }
})

console.log(yargs.argv,  note)
