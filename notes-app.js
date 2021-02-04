let notes = getSavedNotes();

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

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
});

//Unix Epoch - January 1st 1970 00:00:00
//-60000 = 1min in past
const now = new Date()
const timeStamp = now.getTime()
const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)//gives year
// console.log(`Month: ${now.getMonth()}`)//gives current month as index. Jan-0, feb-1
// console.log(`Day: ${now.getDate()}`)//returns the day of month
// console.log(`Hours: ${now.getHours()}`)//returns current hour
// console.log(`Minutes: ${now.getMinutes()}`)//returns current minutes
// console.log(`Seconds: ${now.getSeconds()}`)//returns current seconds
