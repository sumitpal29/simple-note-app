const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    console.log("getting notes data");
    const databuffer = fs.readFileSync("notes.json");
    const dataString = databuffer.toString();
    return JSON.parse(dataString);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getNote = () => {
  console.log("Getting notes");
  const notes = loadNotes();
  notes.forEach(i => {
    console.log(`\n${chalk.white(i.title)}:\t${chalk.yellow(i.body)}\n`);
  });
};

const saveNotes = dataArr => {
  const stringyfied = JSON.stringify(dataArr);
  fs.writeFileSync("notes.json", stringyfied);
};

const matched = (notes, title, cb) =>
  notes.filter((item, index) => {
    if (item.title === title) {
      cb && cb(index);
      return true;
    }
    return false;
  });

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  if (matched(notes, title).length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
  } else console.log("Title already taken", matched.length);
};

const deleteNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => {
    if (note.title === title) {
      return false;
    }
    return true;
  });
  if (filteredNotes.length != notes.length) {
    saveNotes(filteredNotes);
    console.log(`note - title : ${title} , deleted!!!`);
  } else console.log("No notes found");
  // matched(notes, title).length ? deleteCallback : console.log('Title already taken', matched.length)
};

module.exports = {
  getNote,
  addNote,
  deleteNote
};
