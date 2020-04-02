const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs"); // const argumentVectors = process.argv;
const notes = require("./note-app/note");
// const fs = require('fs');

// console.log('Hello world is working!!', validator.isEmail('sumit@fusioncharts.com'), argumentVectors[2])
// const note = []
// note.push({
//     id: note.length,
//     title: yargs.argv.title,
//     content: ''
// })
// const sampleData = [{
//     title: "First Note",
//     author: "sumit pal",
//     body: "Test"
// }]
// fs.writeFileSync('./note-app/note-data.json', JSON.stringify(sampleData))
// const NodeData = fs.readFileSync('./note-app/note-data.json');
// const parsedData = JSON.parse(NodeData.toString());
// // changes
// parsedData[0].title = "Sample Note - 1"

// console.log(parsedData);
// fs.writeFileSync('./note-app/note-data.json', JSON.stringify(parsedData))

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote({
      title: argv.title,
      body: argv.body
    });
  }
});

yargs.command({
  command: "notes",
  describe: "View all notes",
  handler: function() {
    notes.getNote();
  }
});

yargs.command({
  command: "delete",
  describe: "read a note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "Add title to delete note"
    }
  },
  handler: function(argv) {
    notes.deleteNote(argv.title);
  }
});

// console.log(note)

yargs.parse();
