const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector("#note-body")
const removeElement = document.querySelector("#note-remove")
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if(note===undefined){
    location.assign(`/index.html`)
}
//Populating the inputs with stored data
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

window.addEventListener('storage', function(e){ 
  if(e.key==='notes'){
    //parse the data stored on new value
     notes=JSON.parse(e.newValue)
     note = notes.find(function (note) {
       return note.id === noteId; 
     });

     if (note === undefined) {
       location.assign(`/index.html`);
     }
     //Populating the inputs with stored data
     titleElement.value = note.title;
     bodyElement.value = note.body;

  }
  // debugger
  // console.log('some data changed!')
})
