const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector("#note-body")
const removeElement = document.querySelector("#note-remove")
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})

if(note===undefined){
    location.assign(`/index.html`)
}




titleElement.value = note.title
bodyElement.value = note.body



bodyElement.addEventListener("change", function (e) {
  note.body = e.target.value;
  saveNotes(notes);
});

titleElement.addEventListener("change", function (e) {
  note.title = e.target.value;
  saveNotes(notes);
});

removeElement.addEventListener("click", function (e) {
  removeNote(noteId);
  saveNotes(notes);
  location.assign('/');
});

