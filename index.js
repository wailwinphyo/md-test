// Import stylesheets
import './style.css';
import markdownIt from 'markdown-it';

let noteUrl =
  'https://raw.githubusercontent.com/wailwinphyo/md-test/main/notes.md';
//'https://cdn.jsdelivr.net/gh/wailwinphyo/md-test@main/notes.md';
//'https://github.com/wailwinphyo/md-test/main/notes.md';

// Write Javascript code!
const appDiv = document.getElementById('app');
console.log(new markdownIt().render('#hello'));

fetch(noteUrl)
  .then((r) => r.text())
  .then((t) => (appDiv.innerHTML = markdownIt().render(t)));
