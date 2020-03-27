const validator = require("validator");
const chalk = require("chalk");
const fs = require('fs');
const yargs = require('yargs'); // const argumentVectors = process.argv;

// console.log('Hello world is working!!', validator.isEmail('sumit@fusioncharts.com'), argumentVectors[2])
// const note = []
// note.push({
//     id: note.length,
//     title: yargs.argv.title,
//     content: ''
// })
const sampleData = [{
    title: "First Note",
    author: "sumit pal",
    body: "Test"
}]
fs.writeFileSync('./note-app/note-data.json', JSON.stringify(sampleData))
const NodeData = fs.readFileSync('./note-app/note-data.json');
const parsedData = JSON.parse(NodeData.toString());
// changes
parsedData[0].title = "Sample Note - 1"

console.log(parsedData);
fs.writeFileSync('./note-app/note-data.json', JSON.stringify(parsedData))

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log(`${chalk.yellow.bold(argv.title.toUpperCase())}\n${chalk.white(argv.body)}`)
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

// console.log(note)

yargs.parse()