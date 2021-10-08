const fs = require('fs');
const { title } = require('process');


function fetchNotes () {
    try {
    return (JSON.parse(fs.readFileSync('notes.txt')));
    } catch (err) {
    return [];
    }
}


function addingNote (title, body) {
    var notes = fetchNotes(); 
    var note = {
       title,
        body
    };
    var double = notes.filter((note) => note.title === title);
    if(double.length == 0){
        notes.push(note);
        fs.writeFileSync("notes.txt", JSON.stringify(notes));
        logNote(note);
    } else {
        console.log("Title already taken!");
    }
    }
var removeNote = (title) => {
    var notes = fetchNotes(); 
    var filteredNotes = notes.filter((note) => note.title != title);

    var double2 = notes.filter((note) => note.title != title);
    if(double2.length == 0){
        fs.writeFileSync("notes.txt", JSON.stringify(notes));
        logNote(note);
    } else {
        console.log("Note not found!");
    }

}
var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    console.log(`Title: ${filteredNotes[0].title} Body: ${filteredNotes[0].body}`);
}
var getAll = () => {
    var notes = fetchNotes();
    console.log(notes);
}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}
