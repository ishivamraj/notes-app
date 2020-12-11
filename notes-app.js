const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function(note){
      const noteEl = document.createElement('p');
      noteEl.textContent = note.title
      document.querySelector('#notes').appendChild(noteEl)
  })
};

renderNotes(notes, filters); //Initially app renders something

document.querySelector("#create-note").addEventListener("click", function (e) {
  console.log(e);
  e.target.textContent = "The Button was clicked!";
});

// document.querySelector("#remove-all").addEventListener("click", function () {
//   document.querySelectorAll(".note").forEach(function (note) {
//     note.remove();
//   });
// });

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value; //exracting the value from input and updating the object
  renderNotes(notes, filters); //Initially app renders something
});

// document.querySelector('#name-form').addEventListener('submit', function(e){
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value)
//   e.target.elements.firstName.value = ''
// })

document.querySelector('#for-fun').addEventListener('change', function(e){
  console.log(e.target.checked)
})