let notes = [];

const filters = {
  searchText: "",
};

//Retrieving existing saved data data
const notesJSON = localStorage.getItem("notes");
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

// localStorage.setItem('location', 'Philadelphia')
// console.log(localStorage.getItem('location'))
// localStorage.removeItem('location')
// localStorage.clear()
// const user = {
//   name: 'Andrew',
//   age: 27
// }
// const userJSON = localStorage.getItem('user')
// console.log(userJSON)
// const user = JSON.parse(userJSON)
// console.log(`Username is ${user.name} and age is ${user.age}`)

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    if (note.title.length > 0) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = 'Unnamed Note'
    }
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters); //Initially app renders something

document.querySelector("#create-note").addEventListener("click", function (e) {
  notes.push({
    title: "",
    body: "",
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
  // console.log(e);
  // e.target.textContent = "The Button was clicked!";
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
document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
