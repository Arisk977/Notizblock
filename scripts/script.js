let notesTitles = ['Frucht', 'Arbeit'];
let notes= ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for(let indexNote= 0; indexNote < notes.length; indexNote++){
        
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes(){
    let trashcontentRef = document.getElementById('trash-content');
    trashcontentRef.innerHTML = "";
    
    for(let indexTrashNote= 0; indexTrashNote < trashNotes.length; indexTrashNote++){
        trashcontentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote){
    return `<p>+ title: ${notes[indexNote]} -> ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">x</button></p>`;
    
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ title: ${trashNotes[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onclick="removeTrash(${indexTrashNote})">x</button></p>`;
    
}

//notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');

   saveToLocalStorage()
    getFromLocalStorage()
    renderNotes();
  
    noteInputRef.value = "";
 
}

function saveToLocalStorage(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

     localStorage.setItem(noteInput, noteInput);
}

function getFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const element = localStorage.getItem(key);

        notes.push(element);
    }
}

//notizen löschen

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    let trashNotesTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle);
    renderNotes();
    renderTrashNotes();
}

function removeFromLocalStorage(trashNotes){
    localStorage.removeItem(trashNotes)
}

function removeTrash(indexTrashNote){
    removeFromLocalStorage(trashNotes);
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);
    
    renderNotes();
    renderTrashNotes();
}

//notizen archivieren