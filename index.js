// Import stylesheets
import './style.css';
import markdownIt from 'markdown-it';

let noteUrl = './nodes.md';
// Write Javascript code!
const appDiv = document.getElementById('app');

fetch(noteUrl)
  .then((r) => {
    console.log(r);
    return r;
  })
  .then((r) => {
    console.log(r);
    return r.text();
  })
  .then((t) => (appDiv.innerHTML = 'hello' + t));
