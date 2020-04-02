const yargs = require("yargs"); // const argumentVectors = process.argv;
const notes = require("./note-app/note");


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

yargs.command({
  command: "search",
  describe: "search a note by title",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "search by title"
    }
  },
  handler: function(argv) {
    notes.search(argv.title);
  }
});


yargs.parse();
