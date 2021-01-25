const notes = getSavedNotes();

const filters = {
  searchText: "",
};



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


renderNotes(notes, filters); //Initially app renders something

document.querySelector("#create-note").addEventListener("click", function (e) {
  const hash = uuidv4();
  notes.push({
    id: hash,
    title: "",
    body: "",
  });
  saveNotes(notes)
  // renderNotes(notes, filters);
  // location.assign("/edit.html#",hash)
  location.assign(`/edit.html#${hash}`);
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
